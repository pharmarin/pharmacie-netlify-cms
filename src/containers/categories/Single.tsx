import ArchiveGrid from "components/ArchiveGrid";
import Layout from "components/Layout";
import { graphql } from "gatsby";
import { getImage, IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";
import { Helmet } from "react-helmet";
import { CategoriesSingleQuery } from "../../../graphql-types";

const CategoriesSingle: React.FC<{
  data: CategoriesSingleQuery;
  pageContext: any;
}> = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;
  const category = pageContext.categoriesName;
  const title = data.site.siteMetadata.title;

  return (
    <Layout>
      <Helmet title={`Catégorie ${category} | ${title}`} />

      <h3>Catégorie {category}</h3>
      <ArchiveGrid
        posts={posts.map((post) => ({
          id: post.node.id,
          categories: post.node.frontmatter.categories,
          featuredImage: getImage(
            post.node.frontmatter.featuredImage as IGatsbyImageData
          ),
          link: post.node.fields.link,
          tags: post.node.frontmatter.tags,
          title: post.node.frontmatter.title,
        }))}
      />
    </Layout>
  );
};

export default CategoriesSingle;

export const query = graphql`
  query CategoriesSingle($categoriesName: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$categoriesName] } } }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            link
          }
          frontmatter {
            categories
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 400, quality: 100, layout: CONSTRAINED)
              }
            }
            tags
            title
          }
        }
      }
    }
  }
`;
