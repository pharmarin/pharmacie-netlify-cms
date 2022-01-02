import Card from "components/Card";
import React from "react";

const Grid: React.FC<{
  posts: {
    title: string;
    subtitle?: string;
    link: string;
    content: string;
    thumbnail: string;
  }[];
  type: string;
}> = ({ posts, type }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {posts.map((post) => (
        <article className={"tease tease-${type}"} id="tease-${post.id}">
          <Card
            title={post.title}
            subtitle={post.subtitle}
            link={post.link}
            content={post.content}
            thumbnail={post.thumbnail}
          />
        </article>
      ))}
    </div>
  );
};

export default Grid;
