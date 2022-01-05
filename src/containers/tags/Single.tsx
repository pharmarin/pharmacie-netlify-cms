import ArchiveGrid from "components/ArchiveGrid";
import Layout from "components/Layout";
import { graphql } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";
import { File, TagSingleQuery } from "../../../graphql-types";
const TagSingle: React.FC<{ data: TagSingleQuery; pageContext: any }> = ({
  data,
  pageContext,
}) => {
  const posts = data.allMarkdownRemark.edges;
  const tag = pageContext.taxonomy;
  const title = data.site.siteMetadata.title;

  return (
    <Layout>
      <Helmet title={`${tag} | ${title}`} />
      <h3>Tag {tag}</h3>
      <ArchiveGrid
        posts={posts.map((post) => ({
          id: post.node.id,
          categories: post.node.frontmatter.categories,
          featuredImage: post.node.frontmatter.featuredImage as File,
          link: post.node.fields.slug,
          tags: post.node.frontmatter.tags,
          title: post.node.frontmatter.title,
        }))}
      />
    </Layout>
  );
};

export default TagSingle;

export const query = graphql`
  query TagSingle($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
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
