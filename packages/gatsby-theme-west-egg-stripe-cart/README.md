# gatsby-theme-west-egg-stripe-cart

A Gatsby theme for a stripe checkout. Register an account at [Stripe](https://stripe.com/en-se)

Add to your Gatsby sites gatsby-config.js just like you would with a plugin. The `STRIPE_API_KEY`, `STRIPE_SECRET_KEY` and `siteUrl` are passed in as options from the consuming theme.

```
module.exports = {

    __experimentalThemes: [
      'gatsby-theme-west-egg-style',
      {
        resolve: 'gatsby-theme-west-egg-stripe-cart',
        options: {
          STRIPE_API_KEY,
          STRIPE_SECRET_KEY,
          siteUrl
        }
      }
  ],
}
```

Example usage:

```
import { StripeCheckout } from 'gatsby-theme-west-egg-stripe-cart';

    <StripeCheckout
        button={<Button type="submit" text="Buy"/>}
        sku='sku_123'
        quantity={1}
    />
```

The component takes a custom button as its form submit which enables you to style it which ever way you wish, it only requires that you provide its type as 'submit'.

In addition the component requires you to provide the products sku (which can be taken from your products in your stripe dashboard) and the quantity of items to purchase.

Once the user clicks the button to make a purchase they are redirected to the stripe checkout where they can fill out their card details and complete their purchase. Upon completion the user is redirected back to your gatsby site.

This theme provides two base components (success/canceled) which you should shadow and style yourself. These components should be placed in a checkout folder inside your src/pages folder:

```
src/pages/checkout/success
src/pages/checkout/canceled
```

Current status: WIP

## Built With

- [Gatbsy](https://www.gatsbyjs.org/)
- [Stripe](https://stripe.com/en-se)
- [TypeScript](https://www.typescriptlang.org/)

## Authors

- **Rich Haines** - _Hungry Bear Studio_

## License

This project is licensed under the MIT License
