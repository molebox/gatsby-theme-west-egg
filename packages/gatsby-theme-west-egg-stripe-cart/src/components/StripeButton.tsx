import * as React from 'react';

const STRIPE_API_KEY = 'pk_test_sCZdKKv3RLpcLwCLybjQVKQE004MOo7pXE';

export default () => {
	// const [stripe, setStripe] = React.useState(Stripe(STRIPE_API_KEY));

	let stripe: any;

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
							items: [{ sku: 'sku_F2wt2pvjhQrs0w', quantity: 1 }],

							// Note that it is not guaranteed your customers will be redirected to this
							// URL *100%* of the time, it's possible that they could e.g. close the
							// tab between form submission and the redirect.
							successUrl: 'http://localhost:8000/success',
							cancelUrl: 'http://localhost:8000/canceled',
						})
						.then((result: any) => {
							console.log({ result });
							if (result.error) {
								console.log(result.error.message);
								// If `redirectToCheckout` fails due to a browser or network
								// error, display the localized error message to your customer.
								// var displayError = document.getElementById('error-message');
								// displayError.textContent = result.error.message;
							}
						});
			}}
		>
			<button type="submit">Buy Now</button>
		</form>
	);
};
