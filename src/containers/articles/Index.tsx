import ArchiveGrid from "components/ArchiveGrid";
import Layout from "components/Layout";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { ArticlesIndexQuery, File } from "../../../graphql-types";

export const ArticlesIndex: React.FC<{ data: ArticlesIndexQuery }> = ({
  data,
}) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
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
  );
};

const ArticlesIndexContainer = () => {
  const data = useStaticQuery<ArticlesIndexQuery>(graphql`
    query ArticlesIndex {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { type: { eq: "article" } } }
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
            fields {
              slug
            }
            frontmatter {
              categories
              date(formatString: "MMMM DD, YYYY")
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
  `);

  return (
    <Layout>
      <ArticlesIndex data={data} />
    </Layout>
  );
};

export default ArticlesIndexContainer;
