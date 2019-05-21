const path = require('path');
const pkg = require('./package.json');

module.exports = (options) => {
    const {title, description, author, twitter, siteUrl} = options;

    return {
        siteMetadata: {
            title,
            description,
            author,
            siteUrl,
            twitter
          },
        plugins: [
            'gatsby-plugin-react-helmet',
            'gatsby-plugin-sharp',
            'gatsby-transformer-sharp',
            {
                resolve: "gatsby-plugin-page-creator",
                options: {
                  path: path.join(__dirname, "src", "pages"),
                },
              },
              {
                resolve: "gatsby-source-filesystem",
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
              'gatsby-plugin-sitemap',
              'gatsby-plugin-typescript'
        ]
    }
}