const path = require('path');
const pkg = require('./package.json');

module.exports = options => {
  const {} = options;

  return {
    plugins: [
     {
        resolve: 'gatsby-mdx',
        options: {
          defaultLayouts: {
            default: require.resolve("./src/templates/blogPosts.tsx")
          }
        }
     },
     {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `blog`
      }
      },
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
    ]
  }
}
