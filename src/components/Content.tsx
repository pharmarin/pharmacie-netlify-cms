import * as React from "react";

export const HTMLContent: React.FC<{ content: any; className?: string }> = ({
  content,
  className,
}) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

const Content: React.FC<{ content: any; className?: string }> = ({
  content,
  className,
}) => <div className={className}>{content}</div>;

export default Content;
