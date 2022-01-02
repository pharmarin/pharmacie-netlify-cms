import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { kebabCase } from "lodash";
import React from "react";
import { File } from "../../graphql-types";

const Card: React.FC<{
  content?: string;
  link: string;
  subtitle?: string;
  tags?: string[];
  thumbnail?: File;
  title: string;
}> = ({ content, link, subtitle, tags, thumbnail, title }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <Link to={link}>
        {thumbnail && thumbnail?.childImageSharp?.gatsbyImageData && (
          <GatsbyImage
            alt={title}
            className="max-h-40"
            imgClassName="w-full object-cover rounded-t"
            image={thumbnail.childImageSharp.gatsbyImageData}
          />
        )}

        <div className="px-6 py-4">
          <div className="font-bold text-xl">{title}</div>
          {subtitle && <div className="italic text-lg mb-2">{subtitle}</div>}

          {content && <p className="text-gray-700 text-base">{content}</p>}
        </div>
      </Link>

      {tags && (
        <div className="px-6 py-4">
          {tags.map((tag) => (
            <Link key={tag} to={"tags/" + kebabCase(tag)}>
              <span className="inline-block bg-gray-200 rounded-full mb-1 px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #{tag}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
