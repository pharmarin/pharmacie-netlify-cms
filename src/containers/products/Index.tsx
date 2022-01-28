import ArchiveGrid from "components/ArchiveGrid";
import Layout from "components/Layout";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, ImageDataLike } from "gatsby-plugin-image";
import React from "react";
import { Helmet } from "react-helmet";
import { ProductsIndexQuery } from "../../../graphql-types";

export const ProductsIndex: React.FC<{ data: ProductsIndexQuery }> = ({
  data,
}) => {
  const { nodes: products } = data.allProductsJson;

  return (
    <ArchiveGrid
      horizontal
      posts={products.map((product) => ({
        featuredImage: getImage(product.featuredImage as ImageDataLike),
        id: product.id,
        link: product.fields.link,
        subtitle: product.laboratoire,
        title: product.title,
      }))}
    />
  );
};

const ProductsIndexContainer: React.FC<{ as?: React.ElementType }> = ({
  as,
}) => {
  const Component = as ?? Layout;
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
          laboratoire
          title
        }
      }
    }
  `);

  return (
    <Component>
      <Helmet title={`Produits | ${site.siteMetadata.title}`} />
      <ProductsIndex data={data} />
    </Component>
  );
};

export default ProductsIndexContainer;
