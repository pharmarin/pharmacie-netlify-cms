import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";

const PreviewCompatibleImage: React.FC<{
  imageInfo: any;
  className?: string;
}> = ({ className, imageInfo }) => {
  const imageStyle = { borderRadius: "5px" };

  const { alt = "", childImageSharp, image } = imageInfo;

  if (!!image && !!image.childImageSharp) {
    return (
      <GatsbyImage
        className={className}
        image={image.childImageSharp.gatsbyImageData}
        style={imageStyle}
        alt={alt}
      />
    );
  } else if (!!childImageSharp) {
    return (
      <GatsbyImage
        className={className}
        image={childImageSharp.gatsbyImageData}
        style={imageStyle}
        alt={alt}
      />
    );
    // for Netlify CMS
  } else if (image) {
    return (
      <img
        className={className}
        style={{ imageStyle } as React.CSSProperties}
        src={image}
        alt={alt}
      />
    );
  } else {
    return null;
  }
};

export default PreviewCompatibleImage;
