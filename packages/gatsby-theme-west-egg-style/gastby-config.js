const path = require('path');
const pkg = require('./package.json');

module.exports = (options) => {
    const {} = options;

    return {
        plugins: [
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
              {
                resolve: 'gatsby-plugin-google-fonts',
                options: {
                  fonts: [
                    `Montserrat`,
                    `source sans pro\:300,400,400i,700` 
                  ]
                }
              },
              'gatsby-plugin-emotion',
              'gatsby-plugin-typescript'
        ]
    }
}