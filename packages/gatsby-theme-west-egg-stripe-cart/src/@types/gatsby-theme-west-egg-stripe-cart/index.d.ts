declare module 'gatsby-theme-west-egg-stripe-cart' {

    interface Stripe {
        button: JSX.Element;
        sku: string;
        quantity: number;
    }
    
    /**
     * A Stripe checkout form. When submitted the user will be redirected to the stripe checkout.
     * Upon completion of purchase the user will be redirected back to your website.
     *
     * @example <StripeCheckout button={<MyCustomButton type="submit" text="Buy"/>} sku="sku_123" quantity={1}/>
     * @param button A custom button element to submit the form
     * @param sku A product stock keeping unit
     * @param quantity The quantity to be included in the checkout
     */
    export const StripeCheckout: (props: Stripe) => JSX.Element;
}