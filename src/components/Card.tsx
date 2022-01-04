import Categories from "components/Categories";
import TagList from "components/TagList";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { File } from "../../graphql-types";

const Card: React.FC<{
  categories?: string[];
  content?: string;
  link: string;
  subtitle?: string;
  tags?: string[];
  featuredImage?: File;
  title: string;
}> = ({ categories, content, link, subtitle, tags, featuredImage, title }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <Link to={link} className="mb-4">
        {featuredImage && featuredImage?.childImageSharp?.gatsbyImageData && (
          <GatsbyImage
            alt={title}
            className="max-h-40"
            imgClassName="w-full object-cover rounded-t"
            image={featuredImage.childImageSharp.gatsbyImageData}
          />
        )}

        <div className="px-6 py-4">
          <div className="font-bold text-xl">{title}</div>
          {subtitle && <div className="italic text-lg mb-2">{subtitle}</div>}

          {content && <p className="text-gray-700 text-base">{content}</p>}
        </div>
      </Link>

      <Categories className="px-6" categories={categories} />
      <TagList className="px-6" tags={tags} />
    </div>
  );
};

export default Card;
