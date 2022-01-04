import { Link } from "gatsby";
import { kebabCase } from "lodash";
import React from "react";

const TagList: React.FC<{ className?: string; tags?: string[] }> = ({
  className,
  tags,
}) => {
  if (!tags) {
    return null;
  }

  return (
    <div className={"flex flex-wrap " + className}>
      {tags.map((tag) => (
        <Link
          key={tag}
          to={"/tags/" + kebabCase(tag)}
          className="bg-gray-200 rounded-full mb-1 px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
        >
          #{tag}
        </Link>
      ))}
    </div>
  );
};

export default TagList;
