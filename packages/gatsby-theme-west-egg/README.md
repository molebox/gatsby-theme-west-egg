# gatsby-theme-west-egg

A Gatsby theme package built with Emotion and Typescript consisting of:

- Style theme
- Mdx blog theme: WIP
- Stripe cart theme
- Core theme

```
module.exports = {

        __experimentalThemes: [
          {
            resolve: 'gatsby-theme-west-egg',
            options: {
              STRIPE_API_KEY: process.env.STRIPE_API_KEY,
              STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
              title: 'Hungry Bear Studio Gatsby Theme Package',
              description: 'West egg gatsby theme package. Comes with style theme, stripe cart theme, blog and core themes.',
              author: 'Hungry Bear Studio',
              twitter: '@studio_hungry',
              siteUrl: 'http://localhost:8000'
            }
          }
        ],
}
```

Create a blog folder at the root of your site and add your mdx files there.

Current status: WIP

## Built With

- [Gatbsy](https://www.gatsbyjs.org/)
- [Emotion](https://emotion.sh/docs/introduction)
- [Stripe Checkout](https://stripe.com/en-se)
- [TypeScript](https://www.typescriptlang.org/)

## Authors

- **Rich Haines** - _Hungry Bear Studio_

## License

This project is licensed under the MIT License
