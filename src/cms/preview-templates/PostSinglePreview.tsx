import { PostsSingle } from "containers/posts/Single";
import React from "react";
import { File } from "../../../graphql-types";

const PostSinglePreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(["data", "tags"]);
  return (
    <PostsSingle
      id={entry.getIn(["data", "id"])}
      content={widgetFor("body")}
      date={entry.getIn(["data", "date"])}
      featuredImage={entry.getIn(["data", "featuredImage"]) as File}
      tags={tags && tags.toJS()}
      title={entry.getIn(["data", "title"])}
    />
  );
};

export default PostSinglePreview;
