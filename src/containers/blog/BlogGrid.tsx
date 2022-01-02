import { graphql, StaticQuery } from "gatsby";
import React from "react";
import { BlogGridQuery, File } from "../../../graphql-types";
import Card from "../../components/Card";

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
              title={post.frontmatter.title}
              thumbnail={post.frontmatter.featuredImage as File}
              link={post.fields.slug}
              tags={post.frontmatter.tags}
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
                  tags
                  title
                  templateKey
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
