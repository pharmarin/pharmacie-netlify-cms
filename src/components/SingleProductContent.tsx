import React from "react";
import { ProductsSingleQuery } from "../../graphql-types";

const SingleProductContent: React.FC<{
  attributes: ProductsSingleQuery["productsJson"]["attributes"];
}> = ({ attributes }) => {
  const labels = {
    indication: "Indication",
    composition: "Composition",
    action: "Mode d'action",
    utilisation: "Posologie",
    conseils: "Conseils associés",
    avantages: "Plus produit",
    precautions: "Précautions d'utilisation",
  };

  return (
    <div className="w-full border border-gray-300 divide-y rounded-md">
      {Object.entries(labels).map(([slug, label]) => {
        const content = attributes?.[slug];

        return content ? (
          <>
            <div className="px-4 py-2 bg-gray-50 text-gray-600 first:rounded-t-md">
              {label}
            </div>
            <div className="px-4 py-2">
              {content.map((line) => (
                <p>{line}</p>
              ))}
            </div>
          </>
        ) : null;
      })}
    </div>
  );
};

export default SingleProductContent;
