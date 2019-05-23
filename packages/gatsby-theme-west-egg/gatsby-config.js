const path = require('path');
const pkg = require('./package.json');

module.exports = (options) => {
  const {
    STRIPE_API_KEY, 
    STRIPE_SECRET_KEY, 
    title,
    description,
    author,
    twitter,
    siteUrl
  } = options;

  return {
    __experimentalThemes: [
      'gatsby-theme-west-egg-style',
      'gatsby-theme-west-egg-mdx-blog',
      {
        resolve: 'gatsby-theme-west-egg-core',
        options: {
          title,
          description,
          author,
          siteUrl,
          twitter
        }
      },
      {
        resolve: 'gatsby-theme-west-egg-stripe-cart',
        options: {
          STRIPE_API_KEY,
          STRIPE_SECRET_KEY,
          siteUrl
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
          resolve: 'gatsby-source-filesystem',
          options: {
            name: 'blog',
            path: `blog`
          }
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
}