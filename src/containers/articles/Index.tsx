import Card from "components/Card";
import Layout from "components/Layout";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { ArticlesIndexQuery, File } from "../../../graphql-types";

export const ArticlesIndex: React.FC<{ data: ArticlesIndexQuery }> = ({
  data,
}) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div id="index" className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {posts &&
        posts.map(({ node: post }) => (
          <article
            key={post.id}
            className={"tease tease-" + post.frontmatter.type}
            id={"tease-" + post.id}
          >
            <Card
              categories={post.frontmatter.categories}
              featuredImage={post.frontmatter.featuredImage as File}
              link={post.fields.slug}
              tags={post.frontmatter.tags}
              title={post.frontmatter.title}
            />
          </article>
        ))}
    </div>
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
              type
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
