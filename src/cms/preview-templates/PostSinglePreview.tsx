import { PostsSingle } from "containers/posts/Single";
import { getImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";

const PostSinglePreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(["data", "tags"]);
  return (
    <PostsSingle
      id={entry.getIn(["data", "id"])}
      content={widgetFor("body")}
      date={entry.getIn(["data", "date"])}
      featuredImage={
        getImage(entry.getIn(["data", "featuredImage"])) as IGatsbyImageData
      }
      tags={tags && tags.toJS()}
      title={entry.getIn(["data", "title"])}
    />
  );
};

export default PostSinglePreview;
