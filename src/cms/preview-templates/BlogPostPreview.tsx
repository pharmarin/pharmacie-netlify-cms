import BlogPostContainer from "containers/blog/BlogPost";
import React from "react";
import { File } from "../../../graphql-types";

const BlogPostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(["data", "tags"]);
  return (
    <BlogPostContainer
      id={entry.getIn(["data", "id"])}
      content={widgetFor("body")}
      date={entry.getIn(["data", "date"])}
      featuredImage={entry.getIn(["data", "featuredImage"]) as File}
      tags={tags && tags.toJS()}
      title={entry.getIn(["data", "title"])}
    />
  );
};

export default BlogPostPreview;
