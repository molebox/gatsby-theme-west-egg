const path = require('path');
const pkg = require('./package.json');

module.exports = {
  __experimentalThemes: [],
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
          'gatsby-plugin-stripe'
    ]
}