import Layout from "components/Layout";
import { graphql, Link, useStaticQuery } from "gatsby";
import { groupBy, kebabCase } from "lodash";
import React from "react";
import { Helmet } from "react-helmet";
import { LaboratoiresIndexQuery } from "../../../graphql-types";

const LaboratoiresIndex = () => {
  const { allProductsJson, site } =
    useStaticQuery<LaboratoiresIndexQuery>(graphql`
      query LaboratoiresIndex {
        site {
          siteMetadata {
            title
          }
        }
        allProductsJson {
          group(field: laboratoire) {
            fieldValue
            totalCount
          }
        }
      }
    `);

  return (
    <Layout>
      <Helmet title={`Laboratoires | ${site.siteMetadata.title}`} />

      <h1>Laboratoires</h1>
      <div className="flex flex-col space-y-4">
        {Object.entries(
          groupBy(allProductsJson.group, (laboratoire) =>
            laboratoire.fieldValue?.[0].toUpperCase()
          )
        ).map(([letter, categories]) => (
          <div className="flex items-center">
            <h2 className="mr-2 text-3xl">{letter}</h2>
            {categories.map((category) => (
              <Link
                to={`/laboratoires/${kebabCase(category.fieldValue)}/`}
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

export default LaboratoiresIndex;
