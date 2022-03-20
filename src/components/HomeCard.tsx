import { Link } from "gatsby";
import React from "react";

const HomeCard: React.FC<{ link: string; title: string }> = ({
  link,
  title,
}) => {
  return (
    <Link
      to={link}
      className="flex justify-center items-center rounded-lg shadow-lg hover:bg-gray-50 w-48 h-48"
    >
      <span className="text-gray-700 text-center">{title}</span>
    </Link>
  );
};

export default HomeCard;
