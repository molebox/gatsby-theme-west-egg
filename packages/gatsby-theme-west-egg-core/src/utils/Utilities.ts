import { graphql, useStaticQuery } from 'gatsby';

/**
 * Hook to provide the site meta data.
 * Provides title, description and author
 */
export function useSiteMetadata() {
	const { site } = useStaticQuery(
		graphql`
			query SITE_METADATA_QUERY {
				site {
					siteMetadata {
						title
						description
						author
						twitter
					}
				}
			}
		`
	);
	return site.siteMetadata;
}
