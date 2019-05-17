import * as React from 'react';
import {MetadataContext, MetadataProvider} from '../utils/MetadataProvider';

interface Stripe {
	button: JSX.Element;
	sku: string;
	quantity: number;
}

const StripeButton = ({ button, sku, quantity }: Stripe) => {
	const metadata = React.useContext(MetadataContext);

	if (!metadata) {
		return <h1>make an error component to handle this stuff</h1>;
	}
	
	let stripe: any;
	const { STRIPE_API_KEY, siteUrl } = metadata;

	React.useEffect(() => {
		stripe = Stripe(STRIPE_API_KEY);
	}, []);

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				stripe &&
					stripe
						.redirectToCheckout({
							items: [{ sku, quantity }],

							// Note that it is not guaranteed your customers will be redirected to this
							// URL *100%* of the time, it's possible that they could e.g. close the
							// tab between form submission and the redirect.
							successUrl: `${siteUrl}/checkout/success`,
							cancelUrl: `${siteUrl}/checkout/canceled`,
						})
						.then((result: any) => {
							console.log({ result });
							if (result.error) {
								console.log(result.error.message);
								// If `redirectToCheckout` fails due to a browser or network
								// error, handle the error -- toast ?
							}
						});
			}}
		>
			{button}
		</form>
	);
};

/**
 * A Stripe checkout form. When submitted the user will be redirected to the stripe checkout.
 * Upon completion of purchase the user will be redirected back to your website.
 *
 * @example <StripeCheckout button={<MyCustomButton type="submit" text="Buy"/>} sku="sku_123" quantity={1}/>
 * @param button A custom button element to submit the form
 * @param sku A product stock keeping unit
 * @param quantity The quantity to be included in the checkout
 */
export default ({ button, sku, quantity }: Stripe) => (
	<MetadataProvider>
		<StripeButton
			button={button}
			sku={sku}
			quantity={quantity}
		/>
	</MetadataProvider>
)