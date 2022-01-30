import Layout from "components/Layout";
import SingleProductContent from "components/SingleProductContent";
import SingleTitle from "components/SingleTitle";
import { graphql, Link, PageProps } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { kebabCase } from "lodash";
import React from "react";
import { Helmet } from "react-helmet";
import { ProductsSingleQuery } from "../../../graphql-types";

export const ProductsSingle: React.FC<{
  attributes: ProductsSingleQuery["productsJson"]["attributes"];
  featuredImage: IGatsbyImageData;
  id: string;
  laboratoire?: string;
  title?: string;
}> = ({ attributes, featuredImage, id, laboratoire, title }) => {
  return (
    <div className="content-wrapper mb-4">
      <article className="mx-auto max-w-3xl" id={"article-" + id}>
        <div className="flex flex-row sm:space-x-8">
          {featuredImage && (
            <div className="flex-none hidden sm:flex max-w-[30%]">
              <GatsbyImage
                alt={title}
                className="max-h-40"
                imgClassName="w-full object-cover rounded-t"
                image={featuredImage}
              />
            </div>
          )}
          <div className="w-full">
            <section className="article-content w-full space-y-8">
              <SingleTitle
                subtitle={
                  <Link to={`/laboratoires/${kebabCase(laboratoire)}`}>
                    {laboratoire}
                  </Link>
                }
                title={title}
              />
              <SingleProductContent attributes={attributes} />
            </section>
          </div>
        </div>
      </article>
    </div>
  );
};

const ProductsSingleContainer: React.FC<PageProps<ProductsSingleQuery>> = ({
  data,
}) => {
  const { productsJson: product, site } = data;

  return (
    <Layout>
      <Helmet title={`${product.title} | ${site.siteMetadata.title}`} />

      <ProductsSingle
        attributes={product.attributes}
        featuredImage={getImage(product.featuredImage as IGatsbyImageData)}
        id={product.id}
        laboratoire={product.laboratoire}
        title={product.title}
      />
    </Layout>
  );
};

export default ProductsSingleContainer;

export const pageQuery = graphql`
  query ProductsSingle($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    productsJson(id: { eq: $id }) {
      attributes {
        action
        avantages
        composition
        conseils
        indication
        utilisation
      }
      featuredImage {
        childImageSharp {
          gatsbyImageData
        }
      }
      id
      laboratoire
      title
    }
  }
`;
