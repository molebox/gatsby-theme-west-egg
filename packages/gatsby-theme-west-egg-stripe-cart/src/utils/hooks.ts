import { graphql, useStaticQuery } from 'gatsby';

/**
 * Hook to provide the site meta data.
 * Provides STRIPE_API_KEY and siteUrl
 */
export const useSiteMetadata = () => {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						STRIPE_API_KEY
						siteUrl
					}
				}
			}
		`
	);
	return site;
};

/**
 * Hook to provide the product data.
 * @returns id, currency, price, name
 */
export const useProductData = () => {
	const { allStripeSku } = useStaticQuery(
	  graphql`
		{
			allStripeSku {
				edges {
					node {
						id
						currency
						price
						attributes {
							name
						}
					}
				}
			}
		}

	  `
	)
	return allStripeSku.edges
  }
