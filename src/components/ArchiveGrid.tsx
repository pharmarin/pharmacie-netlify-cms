import Card from "components/Card";
import { IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";

const ArchiveGrid: React.FC<{
  horizontal?: boolean;
  posts: {
    id: string;
    categories?: string[];
    content?: string;
    link: string;
    subtitle?: string;
    tags?: string[];
    featuredImage?: IGatsbyImageData;
    title: string;
  }[];
}> = ({ horizontal, posts }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {posts &&
        posts.map((post) => (
          <article key={post.id} id={"tease-" + post.id}>
            <Card
              categories={post.categories}
              featuredImage={post.featuredImage}
              horizontal={horizontal}
              link={post.link}
              tags={post.tags}
              subtitle={post.subtitle}
              title={post.title}
            />
          </article>
        ))}
    </div>
  );
};

export default ArchiveGrid;
