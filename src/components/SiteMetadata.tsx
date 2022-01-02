import { graphql, useStaticQuery } from "gatsby";
import { SiteMetadataQuery } from "../../graphql-types";

const useSiteMetadata = () => {
  const { site } = useStaticQuery<SiteMetadataQuery>(
    graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );
  return site.siteMetadata;
};

export default useSiteMetadata;
