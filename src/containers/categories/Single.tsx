import Layout from "components/Layout";
import { graphql, Link } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";
import { CategorySingleQuery } from "../../../graphql-types";

const CategorySingle: React.FC<{
  data: CategorySingleQuery;
  pageContext: any;
}> = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;
  const postLinks = posts.map((post) => (
    <li key={post.node.fields.slug}>
      <Link to={post.node.fields.slug}>
        <h2 className="is-size-2">{post.node.frontmatter.title}</h2>
      </Link>
    </li>
  ));
  const category = pageContext.taxonomy;
  const title = data.site.siteMetadata.title;
  const totalCount = data.allMarkdownRemark.totalCount;
  const categoryHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with “${category}”`;

  return (
    <Layout>
      <section className="section">
        <Helmet title={`${category} | ${title}`} />
        <div className="container content">
          <div className="columns">
            <div
              className="column is-10 is-offset-1"
              style={{ marginBottom: "6rem" }}
            >
              <h3 className="title is-size-4 is-bold-light">
                {categoryHeader}
              </h3>
              <ul className="categorylist">{postLinks}</ul>
              <p>
                <Link to="/categories/">Browse all categories</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CategorySingle;

export const query = graphql`
  query CategorySingle($category: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
