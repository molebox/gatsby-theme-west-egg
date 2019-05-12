const path = require('path');
const pkg = require('./package.json');
require('dotenv').config();

module.exports = {
    __experimentalThemes: [
        'gatsby-theme-west-egg-style',
        {
          resolve: 'gatsby-theme-west-egg-stripe-cart',
          options: {
            STRIPE_API_KEY: process.env.STRIPE_API_KEY,
            STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
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
            resolve: 'gatsby-plugin-google-fonts',
            options: {
              fonts: [
                `Montserrat`,
                `source sans pro\:300,400,400i,700` 
              ]
            }
          },
          {
            resolve: 'gatsby-plugin-compile-es6-packages',
            options: {
              modules: [pkg.name]
            }
          },
    ]
}