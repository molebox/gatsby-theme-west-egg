import { graphql, useStaticQuery } from 'gatsby';

/**
 * Hook to provide the site meta data.
 * Provides STRIPE_API_KEY
 */
export function useSiteMetadata() {
	const { site } = useStaticQuery(
		graphql`
        query SITE_METADATA_QUERY {
          site {
            siteMetadata {
                STRIPE_API_KEY,
                siteUrl
            }
          }
        }
      `
	);
	return site.siteMetadata;
}
