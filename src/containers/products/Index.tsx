import ArchiveGrid from "components/ArchiveGrid";
import Layout from "components/Layout";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import { ProductsIndexQuery } from "../../../graphql-types";

export const ProductsIndex: React.FC<{ data: ProductsIndexQuery }> = ({
  data,
}) => {
  const { nodes: products } = data.allProductsJson;

  return (
    <ArchiveGrid
      posts={products.map((product) => ({
        id: product.id,
        link: product.fields.link,
        subtitle: product.laboratoire,
        title: product.title,
      }))}
    />
  );
};

const ProductsIndexContainer = () => {
  const { site, ...data } = useStaticQuery<ProductsIndexQuery>(graphql`
    query ProductsIndex {
      site {
        siteMetadata {
          title
        }
      }
      allProductsJson(sort: { order: DESC, fields: [laboratoire] }) {
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
  `);

  return (
    <Layout>
      <Helmet title={`Produits | ${site.siteMetadata.title}`} />
      <ProductsIndex data={data} />
    </Layout>
  );
};

export default ProductsIndexContainer;
