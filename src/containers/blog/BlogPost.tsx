import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { File } from "../../../graphql-types";
import Content, { HTMLContent } from "../../components/Content";
import TagList from "../../components/TagList";

export const BlogPost: React.FC<{
  content?: string;
  contentComponent?: typeof HTMLContent;
  date?: string;
  id: string;
  featuredImage?: File;
  tags?: string[];
  title?: string;
  helmet?: React.ReactNode;
}> = ({
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
            <section className="article-content w-full">
              <div className="flex flex-col relative sm:-mx-4 mb-8">
                <div className="absolute h-full w-full rounded-2xl bg-gray-300 transform -rotate-3"></div>
                <div className="absolute h-full w-full rounded-2xl bg-gradient-to-br from-green-500 to-teal-400 transform -rotate-1"></div>
                <div className="relative p-4 pb-1">
                  <h1 className="text-2xl text-white font-bold">{title}</h1>
                  <p className="text-sm text-green-900">
                    Posté le{" "}
                    <time dateTime="{{ post.date|date('Y-m-d H:i:s') }}">
                      {date}
                    </time>
                  </p>
                </div>
              </div>
              <PostContent className="article-body w-full" content={content} />
              <TagList className="mt-8" tags={tags} />
            </section>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
