import ArchiveGrid from "components/ArchiveGrid";
import Layout from "components/Layout";
import { graphql } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";
import { CategorySingleQuery, File } from "../../../graphql-types";

const CategorySingle: React.FC<{
  data: CategorySingleQuery;
  pageContext: any;
}> = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;
  const category = pageContext.taxonomy;
  const title = data.site.siteMetadata.title;

  return (
    <Layout>
      <Helmet title={`${category} | ${title}`} />
      <h3>Catégorie {category}</h3>
      <ArchiveGrid
        posts={posts.map((post) => ({
          id: post.node.id,
          categories: post.node.frontmatter.categories,
          featuredImage: post.node.frontmatter.featuredImage as File,
          link: post.node.fields.link,
          tags: post.node.frontmatter.tags,
          title: post.node.frontmatter.title,
        }))}
      />
    </Layout>
  );
};

export default CategorySingle;

export const query = graphql`
  query CategorySingle($category: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
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
