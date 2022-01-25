import ArchiveGrid from "components/ArchiveGrid";
import Layout from "components/Layout";
import { graphql } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";
import { LaboratoiresSingleQuery } from "../../../graphql-types";

const LaboratoiresSingle: React.FC<{
  data: LaboratoiresSingleQuery;
  pageContext: any;
}> = ({ data, pageContext }) => {
  const { allProductsJson: products, site } = data;
  const laboratoire = pageContext.taxonomy;

  return (
    <Layout>
      <Helmet
        title={`Laboratoire ${laboratoire} | ${site.siteMetadata.title}`}
      />
      <h3>Laboratoire {laboratoire}</h3>
      <ArchiveGrid
        posts={products.nodes.map((product) => ({
          id: product.id,
          link: product.fields.link,
          subtitle: product.laboratoire,
          title: product.title,
        }))}
      />
    </Layout>
  );
};

export default LaboratoiresSingle;

export const query = graphql`
  query LaboratoiresSingle($laboratoire: String) {
    site {
      siteMetadata {
        title
      }
    }
    allProductsJson(
      limit: 1000
      sort: { fields: [laboratoire], order: DESC }
      filter: { laboratoire: { in: [$laboratoire] } }
    ) {
      totalCount
      nodes {
        id
        fields {
          link
        }
        laboratoire
        title
      }
    }
  }
`;
