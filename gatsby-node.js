const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");
const { uniq, get, kebabCase, map } = require("lodash");

const generateTaxonomies = ({ createPage, posts, taxonomySlug }) => {
  let taxonomies = [];

  posts.forEach((edge) => {
    if (get(edge, `node.frontmatter.${taxonomySlug}`)) {
      taxonomies = taxonomies.concat(edge.node.frontmatter[taxonomySlug]);
    }
  });

  taxonomies = uniq(taxonomies);

  taxonomies.forEach((taxonomy) => {
    const taxonomyPath = `/${taxonomySlug}/${kebabCase(taxonomy)}/`;

    createPage({
      path: taxonomyPath,
      component: path.resolve(`src/containers/${taxonomySlug}/Single.tsx`),
      context: {
        taxonomy,
      },
    });
  });

  createPage({
    path: `/${taxonomySlug}`,
    component: path.resolve(`src/containers/${taxonomySlug}/Index.tsx`),
  });
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              categories
              tags
              type
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;
    const postTypes = uniq(map(posts, "edge.node.frontmatter.type"));

    posts.forEach((edge) => {
      const id = edge.node.id;

      edge.node.frontmatter.type &&
        createPage({
          path: `/${edge.node.frontmatter.type}s${edge.node.fields.slug}`,
          component: path.resolve(
            `src/containers/${edge.node.frontmatter.type}s/Single.tsx`
          ),
          context: {
            id,
          },
        });
    });

    postTypes.forEach((postType) => {
      postType &&
        createPage({
          path: `/${postType}s`,
          component: path.resolve(`src/containers/${postType}s/Index.tsx`),
        });
    });

    generateTaxonomies({ createPage, posts, taxonomySlug: "tags" });
    generateTaxonomies({ createPage, posts, taxonomySlug: "categories" });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
