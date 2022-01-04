import Card from "components/Card";
import { graphql, StaticQuery } from "gatsby";
import React from "react";
import { BlogGridQuery, File } from "../../../graphql-types";

const BlogGridTemplate: React.FC<{ data: BlogGridQuery }> = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {posts &&
        posts.map(({ node: post }) => (
          <article
            key={post.id}
            className={"tease tease-" + post.frontmatter.templateKey}
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

export default function BlogGrid() {
  return (
    <StaticQuery
      query={graphql`
        query BlogGrid {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
                  featuredPost
                  featuredImage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 400
                        quality: 100
                        layout: CONSTRAINED
                      )
                    }
                  }
                  tags
                  templateKey
                  title
                }
              }
            }
          }
        }
      `}
      render={(data) => <BlogGridTemplate data={data} />}
    />
  );
}
