import ArchiveGrid from "components/ArchiveGrid";
import Layout from "components/Layout";
import { graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";
import { Helmet } from "react-helmet";
import { TagsSingleQuery } from "../../../graphql-types";

const TagsSingle: React.FC<{ data: TagsSingleQuery; pageContext: any }> = ({
  data,
  pageContext,
}) => {
  const posts = data.allMarkdownRemark.edges;
  const tag = pageContext.tagsName;
  const title = data.site.siteMetadata.title;

  return (
    <Layout>
      <Helmet title={`Tag ${tag} | ${title}`} />
      <h3>Tag {tag}</h3>
      <ArchiveGrid
        posts={posts.map((post) => ({
          id: post.node.id,
          categories: post.node.frontmatter.categories,
          featuredImage: post.node.frontmatter
            .featuredImage as IGatsbyImageData,
          link: post.node.fields.link,
          tags: post.node.frontmatter.tags,
          title: post.node.frontmatter.title,
        }))}
      />
    </Layout>
  );
};

export default TagsSingle;

export const query = graphql`
  query TagsSingle($tagsName: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tagsName] } } }
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
