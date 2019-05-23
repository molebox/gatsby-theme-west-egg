const path = require('path');
const pkg = require('./package.json');
let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
        __experimentalThemes: [
          {
            resolve: 'gatsby-theme-west-egg',
            options: {
              STRIPE_API_KEY: process.env.STRIPE_API_KEY,
              STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
              title: 'Hungry Bear Studio Gatsby West Egg Theme',
              description: 'West egg gatsby theme package. Comes with style theme, stripe cart theme, mdx blog and core themes. You can shadow any component if you want to edit how it works, or you can just import them and put them to use!',
              author: 'Hungry Bear Studio',
              twitter: '@studio_hungry',
              siteUrl: 'http://localhost:8000'
            }
          },
          'gatsby-theme-west-egg-style'
        ],
        plugins: [
            {
                resolve: "gatsby-plugin-page-creator",
                options: {
                  path: path.join(__dirname, "src", "pages"),
                },
              },
              {
                resolve: 'gatsby-plugin-compile-es6-packages',
                options: {
                  modules: [pkg.name]
                }
              },
              'gatsby-plugin-emotion',
              'gatsby-plugin-typescript'
        ]
}