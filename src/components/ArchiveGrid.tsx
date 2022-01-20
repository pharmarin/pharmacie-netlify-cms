import Card from "components/Card";
import React from "react";
import { File } from "../../graphql-types";

const ArchiveGrid: React.FC<{
  posts: {
    id: string;
    categories?: string[];
    content?: string;
    link: string;
    subtitle?: string;
    tags?: string[];
    featuredImage?: File;
    title: string;
  }[];
}> = ({ posts }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {posts &&
        posts.map((post) => (
          <article key={post.id} id={"tease-" + post.id}>
            <Card
              categories={post.categories}
              featuredImage={post.featuredImage as File}
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
