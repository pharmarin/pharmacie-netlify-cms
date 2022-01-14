import Layout from "components/Layout";
import { graphql, Link, useStaticQuery } from "gatsby";
import { groupBy, kebabCase } from "lodash";
import * as React from "react";
import { Helmet } from "react-helmet";
import { TagsIndexQuery } from "../../../graphql-types";

const TagsIndex = () => {
  const { allMarkdownRemark, site } = useStaticQuery<TagsIndexQuery>(graphql`
    query TagsIndex {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(limit: 1000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  return (
    <Layout>
      <Helmet title={`Tags | ${site.siteMetadata.title}`} />

      <h1>Tags</h1>
      <div className="flex flex-row flex-wrap space-x-4">
        {Object.entries(
          groupBy(allMarkdownRemark.group, (tag) =>
            tag.fieldValue?.[0].toUpperCase()
          )
        ).map(([letter, tags]) => (
          <div className="flex items-end">
            <h2 className="mr-2 text-3xl">{letter}</h2>
            {tags.map((tag) => (
              <Link
                to={`/tags/${kebabCase(tag.fieldValue)}/`}
                className="mr-5 whitespace-nowrap"
              >
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            ))}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default TagsIndex;
