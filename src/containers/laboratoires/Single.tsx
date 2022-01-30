import ArchiveGrid from "components/ArchiveGrid";
import Layout from "components/Layout";
import { graphql } from "gatsby";
import { getImage, IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";
import { Helmet } from "react-helmet";
import { LaboratoiresSingleQuery } from "../../../graphql-types";

const LaboratoiresSingle: React.FC<{
  data: LaboratoiresSingleQuery;
  pageContext: any;
}> = ({ data, pageContext }) => {
  const { allProductsJson: products, site } = data;
  const laboratoire = pageContext.laboratoiresName;

  return (
    <Layout>
      <Helmet
        title={`Laboratoire ${laboratoire} | ${site.siteMetadata.title}`}
      />

      <h3>Laboratoire {laboratoire}</h3>
      <ArchiveGrid
        horizontal
        posts={products.nodes.map((product) => ({
          featuredImage: getImage(product.featuredImage as IGatsbyImageData),
          id: product.id,
          link: product.fields.link,
          subtitle: laboratoire,
          title: product.title,
        }))}
      />
    </Layout>
  );
};

export default LaboratoiresSingle;

export const query = graphql`
  query LaboratoiresSingle($laboratoiresName: String) {
    site {
      siteMetadata {
        title
      }
    }
    allProductsJson(
      limit: 1000
      sort: { fields: title }
      filter: { laboratoire: { eq: $laboratoiresName } }
    ) {
      totalCount
      nodes {
        id
        featuredImage {
          childImageSharp {
            gatsbyImageData(
              backgroundColor: "white"
              height: 200
              width: 200
              transformOptions: { fit: CONTAIN }
            )
          }
        }
        fields {
          link
        }
        title
      }
    }
  }
`;
