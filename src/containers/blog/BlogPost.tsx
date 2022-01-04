import Categories from "components/Categories";
import Content, { HTMLContent } from "components/Content";
import TagList from "components/TagList";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { File } from "../../../graphql-types";

export const BlogPost: React.FC<{
  categories?: string[];
  content?: string;
  contentComponent?: typeof HTMLContent;
  date?: string;
  id: string;
  featuredImage?: File;
  tags?: string[];
  title?: string;
  helmet?: React.ReactNode;
}> = ({
  categories,
  content,
  contentComponent,
  date,
  featuredImage,
  id,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <div className="content-wrapper mb-4">
      {helmet || ""}
      <article className="mx-auto max-w-3xl" id={"blog-post-" + id}>
        <div className="flex flex-row sm:space-x-8">
          <div className="flex-none hidden sm:flex max-w-[30%]">
            {featuredImage &&
              featuredImage?.childImageSharp?.gatsbyImageData && (
                <GatsbyImage
                  alt={title}
                  className="max-h-40"
                  imgClassName="w-full object-cover rounded-t"
                  image={featuredImage.childImageSharp.gatsbyImageData}
                />
              )}
          </div>
          <div className="w-full">
            <section className="article-content w-full space-y-8">
              <div className="flex flex-col relative sm:-mx-4">
                <div className="absolute h-full w-full rounded-2xl bg-gray-300 transform -rotate-3"></div>
                <div className="absolute h-full w-full rounded-2xl bg-gradient-to-br from-green-500 to-teal-400 transform -rotate-1"></div>
                <div className="relative p-4 pb-1">
                  <h1 className="text-2xl text-white font-bold">{title}</h1>
                  <p className="text-sm text-green-900">
                    Posté le <time dateTime={date}>{date}</time>
                  </p>
                </div>
              </div>
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

export default BlogPost;
