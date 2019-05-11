# gatsby-theme-west-egg-stripe-cart

A Gatsby theme for a stripe checkout. Register an account at [Stripe](https://stripe.com/en-se)

Add to your Gatsby sites gatsby-config.js just like you would with a plugin. It's advisable to store your STRIPE_SECRET_KEY as an .env variable and to make sure you ignore your .env file in .gitignore.

```
require('dotenv').config();

module.exports = {
    __experimentalThemes: [
      {
          resolve: 'gatsby-theme-west-egg-stripe-cart',
          options: {
            STRIPE_API_KEY: 'my_api_key_from_stripe',
            STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
            siteUrl: 'http://localhost:8000'
          }
        }
    ]
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
