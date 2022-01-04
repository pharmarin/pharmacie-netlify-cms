import { HTMLContent } from "components/Content";
import Layout from "components/Layout";
import BlogPostContainer from "containers/blog/BlogPost";
import { graphql, PageProps } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import { BlogPostByIdQuery, File } from "../../graphql-types";

const BlogPost: React.FC<PageProps<BlogPostByIdQuery>> = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostContainer
        categories={post.frontmatter.categories}
        content={post.html}
        contentComponent={HTMLContent}
        date={post.frontmatter.date}
        featuredImage={post.frontmatter.featuredImage as File}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
          </Helmet>
        }
        id={post.id}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        categories
        date(formatString: "DD MMMM YYYY", locale: "fr-FR")
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 400, quality: 100, layout: CONSTRAINED)
          }
        }
        title
        description
        tags
      }
    }
  }
`;
