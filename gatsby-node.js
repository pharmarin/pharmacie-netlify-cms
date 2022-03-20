const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { uniq, get, kebabCase, map, flatten } = require("lodash");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const generateTaxonomies = ({ slug, list }) => {
    const taxonomies = uniq(list);

    taxonomies.forEach((taxonomy) => {
      const taxonomyPath = `/${slug}/${kebabCase(taxonomy)}/`;

      createPage({
        path: taxonomyPath,
        component: path.resolve(`src/containers/${slug}/Single.tsx`),
        context: {
          [`${slug}Name`]: taxonomy,
        },
      });
    });

    createPage({
      path: `/${slug}`,
      component: path.resolve(`src/containers/${slug}/Index.tsx`),
    });
  };

  const postsQuery = await graphql(`
    {
      allMarkdownRemark {
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
  `);

  if (postsQuery.errors) {
    postsQuery.errors.forEach((e) => console.error(e.toString()));
    return Promise.reject(postsQuery.errors);
  }

  const posts = postsQuery.data.allMarkdownRemark.edges;
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

  generateTaxonomies({
    list: flatten(posts.map((post) => post.node.frontmatter.tags)),
    slug: "tags",
  });
  generateTaxonomies({
    list: flatten(posts.map((post) => post.node.frontmatter.categories)),
    slug: "categories",
  });

  /**
   * PRODUCTS
   **/

  const productsQuery = await graphql(`
    {
      allProductsJson {
        nodes {
          id
          fields {
            link
          }
          laboratoire
        }
      }
    }
  `);

  if (productsQuery.errors) {
    productsQuery.errors.forEach((e) => console.error(e.toString()));
    return Promise.reject(productsQuery.errors);
  }

  const products = productsQuery.data.allProductsJson.nodes;

  products.forEach((product) => {
    const { id, fields } = product;

    createPage({
      path: fields.link,
      component: path.resolve(`src/containers/products/Single.tsx`),
      context: {
        id,
      },
    });
  });

  createPage({
    path: "products",
    component: path.resolve(`src/containers/products/Index.tsx`),
  });

  generateTaxonomies({
    list: products.map((product) => product.laboratoire),
    slug: "laboratoires",
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

  if (node.internal.type === "ProductsJson") {
    const { laboratoire, title } = node;
    createNodeField({
      name: "link",
      node,
      value: `/products/${kebabCase(laboratoire)}/${kebabCase(title)}`,
    });
  }
};
