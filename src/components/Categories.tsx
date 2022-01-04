import { Link } from "gatsby";
import { kebabCase } from "lodash";
import React from "react";

const Categories: React.FC<{ categories?: string[]; className?: string }> = ({
  categories,
  className,
}) => {
  if (!categories) {
    return null;
  }

  return (
    <div className={"flex flex-wrap " + className}>
      {categories.map((tag) => (
        <Link
          key={tag}
          to={"/categories/" + kebabCase(tag)}
          className="bg-orange-600 rounded-full mb-1 px-3 py-1 text-sm font-semibold text-orange-100 mr-2"
        >
          {tag}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
