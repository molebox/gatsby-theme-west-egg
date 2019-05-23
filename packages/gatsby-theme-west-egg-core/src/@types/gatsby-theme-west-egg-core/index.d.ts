declare module 'gatsby-theme-west-egg-core' {
	/**
	 * An SEO component which places typical site information in the sites head
	 */
	export const SEO: () => JSX.Element;

	interface Sitemetadata {
		title: string;
		description: string;
		author: string;
		twitter: string;
	}
	/**
	 * Hook to provide the site meta data.
	 * Provides title, description and author
	 */
	export const useSiteMetadata: () => Sitemetadata;
}
