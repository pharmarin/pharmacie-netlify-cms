import Categories from "components/Categories";
import TagList from "components/TagList";
import { Link } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { twMerge } from "tailwind-merge";

const Card: React.FC<{
  categories?: string[];
  content?: string;
  horizontal?: boolean;
  link: string;
  subtitle?: string;
  tags?: string[];
  featuredImage?: IGatsbyImageData;
  title: string;
}> = ({
  categories,
  content,
  horizontal,
  link,
  subtitle,
  tags,
  featuredImage,
  title,
}) => {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <Link
        to={link}
        className={twMerge("flex", horizontal ? "flex-row" : "flex-col")}
      >
        {featuredImage && (
          <GatsbyImage
            alt={title}
            className={twMerge("max-h-40")}
            imgClassName={twMerge(
              horizontal
                ? "aspect-square h-20 w-20 rounded !p-4"
                : "w-full object-cover rounded-t"
            )}
            image={featuredImage}
            objectFit={horizontal ? "contain" : "cover"}
          />
        )}

        <div className="px-6 py-4">
          <div className="font-bold text-xl">{title}</div>
          {subtitle && <div className="italic text-lg mb-2">{subtitle}</div>}
          {content && <p className="text-gray-700 text-base">{content}</p>}
        </div>
      </Link>

      {(categories || tags) && (
        <div className="mt-4">
          <Categories className="px-6" categories={categories} />
          <TagList className="px-6 mb-4" tags={tags} />
        </div>
      )}
    </div>
  );
};

export default Card;
