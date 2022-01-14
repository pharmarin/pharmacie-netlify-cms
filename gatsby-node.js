const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
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
              link
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
          path: edge.node.fields.link,
          component: path.resolve(
            `src/containers/${edge.node.frontmatter.type}/Single.tsx`
          ),
          context: {
            id,
          },
        });
    });

    postTypes.forEach((postType) => {
      postType &&
        createPage({
          path: `/${postType}`,
          component: path.resolve(`src/containers/${postType}/Index.tsx`),
        });
    });

    generateTaxonomies({ createPage, posts, taxonomySlug: "tags" });
    generateTaxonomies({ createPage, posts, taxonomySlug: "categories" });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });
    createNodeField({
      name: "link",
      node,
      value: `/${node.frontmatter.type}${slug}`,
    });
  }
};
