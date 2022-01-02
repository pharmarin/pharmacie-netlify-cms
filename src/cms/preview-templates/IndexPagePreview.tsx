import React from "react";
import { IndexPageTemplate } from "../../pages/index";

const IndexPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return <IndexPageTemplate />;
  } else {
    return <div>Loading...</div>;
  }
};

export default IndexPagePreview;
