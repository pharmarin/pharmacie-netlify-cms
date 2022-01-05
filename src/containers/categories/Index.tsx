import Layout from "components/Layout";
import { graphql, Link, PageProps } from "gatsby";
import { kebabCase } from "lodash";
import * as React from "react";
import { Helmet } from "react-helmet";
import { CategoriesIndexQuery } from "../../../graphql-types";

const CategoriesIndex: React.FC<PageProps<CategoriesIndexQuery>> = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <Helmet title={`Categories | ${title}`} />
    <div className="container content">
      <div className="columns">
        <div
          className="column is-10 is-offset-1"
          style={{ marginBottom: "6rem" }}
        >
          <h1 className="title is-size-2 is-bold-light">Categories</h1>
          <ul className="categorylist">
            {group.map((category) => (
              <li key={category.fieldValue}>
                <Link to={`/categories/${kebabCase(category.fieldValue)}/`}>
                  {category.fieldValue} ({category.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </Layout>
);

export default CategoriesIndex;

export const query = graphql`
  query CategoriesIndex {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`;
