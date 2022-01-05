import { ArticleSingle } from "containers/articles/Single";
import React from "react";
import { File } from "../../../graphql-types";

const ArticleSinglePreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(["data", "tags"]);
  return (
    <ArticleSingle
      id={entry.getIn(["data", "id"])}
      content={widgetFor("body")}
      date={entry.getIn(["data", "date"])}
      featuredImage={entry.getIn(["data", "featuredImage"]) as File}
      tags={tags && tags.toJS()}
      title={entry.getIn(["data", "title"])}
    />
  );
};

export default ArticleSinglePreview;
