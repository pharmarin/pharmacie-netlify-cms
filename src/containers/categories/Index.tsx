import Layout from "components/Layout";
import { graphql, Link, useStaticQuery } from "gatsby";
import { groupBy, kebabCase } from "lodash";
import * as React from "react";
import { Helmet } from "react-helmet";

const CategoryIndex = () => {
  const { allMarkdownRemark, site } =
    useStaticQuery<CategoryIndexQuery>(graphql`
      query CategoryIndex {
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
    `);

  return (
    <Layout>
      <Helmet title={`Catégories | ${site.siteMetadata.title}`} />

      <h1>Catégories</h1>
      <div className="flex flex-row flex-wrap space-x-4">
        {Object.entries(
          groupBy(allMarkdownRemark.group, (category) =>
            category.fieldValue?.[0].toUpperCase()
          )
        ).map(([letter, categories]) => (
          <div className="flex items-end">
            <h2 className="mr-2 text-3xl">{letter}</h2>
            {categories.map((category) => (
              <Link
                to={`/categories/${kebabCase(category.fieldValue)}/`}
                className="mr-5 whitespace-nowrap"
              >
                {category.fieldValue} ({category.totalCount})
              </Link>
            ))}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default CategoryIndex;
