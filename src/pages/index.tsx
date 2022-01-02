import React from "react";
import Layout from "../components/Layout";
import BlogGrid from "../containers/blog/BlogGrid";

export const IndexPageTemplate = () => {
  return (
    <div id="index">
      <BlogGrid />
    </div>
  );
};

const IndexPage = () => {
  return (
    <Layout>
      <IndexPageTemplate />
    </Layout>
  );
};

export default IndexPage;
