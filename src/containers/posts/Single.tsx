import Categories from "components/Categories";
import Content, { HTMLContent } from "components/Content";
import Layout from "components/Layout";
import SingleTitle from "components/SingleTitle";
import TagList from "components/TagList";
import { graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { Helmet } from "react-helmet";
import { PostsSingleQuery } from "../../../graphql-types";

export const PostsSingle: React.FC<{
  categories?: string[];
  content?: string;
  contentComponent?: typeof HTMLContent;
  date?: string;
  id: string;
  featuredImage?: IGatsbyImageData;
  tags?: string[];
  title?: string;
}> = ({
  categories,
  content,
  contentComponent,
  date,
  featuredImage,
  id,
  tags,
  title,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <div className="content-wrapper mb-4">
      <article className="mx-auto max-w-3xl" id={"article-" + id}>
        <div className="flex flex-row sm:space-x-8">
          {featuredImage && (
            <div className="flex-none hidden sm:flex max-w-[30%]">
              <GatsbyImage
                alt={title}
                className="max-h-40"
                imgClassName="w-full object-cover rounded-t"
                image={featuredImage}
              />
            </div>
          )}
          <div className="w-full">
            <section className="article-content w-full space-y-8">
              <SingleTitle date={date} title={title} />
              <Categories categories={categories} />
              <PostContent
                className="article-body w-full prose"
                content={content}
              />
              <TagList tags={tags} />
            </section>
          </div>
        </div>
      </article>
    </div>
  );
};

const PostsSingleContainer: React.FC<PageProps<PostsSingleQuery>> = ({
  data,
}) => {
  const { markdownRemark: post, site } = data;

  return (
    <Layout>
      <Helmet
        title={`${post.frontmatter.title} | ${site.siteMetadata.title}`}
      />

      <PostsSingle
        categories={post.frontmatter.categories}
        content={post.html}
        contentComponent={HTMLContent}
        date={post.frontmatter.date}
        featuredImage={getImage(
          post.frontmatter.featuredImage as IGatsbyImageData
        )}
        id={post.id}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

export default PostsSingleContainer;

export const pageQuery = graphql`
  query PostsSingle($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
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
        tags
      }
    }
  }
`;
