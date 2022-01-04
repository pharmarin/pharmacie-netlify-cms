import { IndexPageTemplate } from "pages/index";
import React from "react";

const IndexPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return <IndexPageTemplate />;
  } else {
    return <div>Loading...</div>;
  }
};

export default IndexPagePreview;
