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
              title: 'Hungry Bear Studio Gatsby Theme Package',
              description: 'West egg gatsby theme package. Comes with style theme, stripe cart theme, blog and core themes.',
              author: 'Hungry Bear Studio',
              twitter: '@studio_hungry',
              siteUrl: 'http://localhost:8000'
            }
          }
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