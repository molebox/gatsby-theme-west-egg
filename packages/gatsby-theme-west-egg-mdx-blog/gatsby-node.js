    
const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

const fs = require("fs");
const mkdirp = require("mkdirp");

/* Check that the folders used by source-filesystem plugin exist.
 * If they do not, they will be created.
 */

exports.onPreBootstrap = ({ store, reporter }) => {
  const { program } = store.getState();

  const dirs = [
    path.join(program.directory, "blog"),
  ];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      reporter.log(`creating the ${dir} directory`);
      mkdirp.sync(dir);
    }
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  // We only want to operate on `Mdx` nodes. If we had content from a
  // remote CMS we could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode });
    createNodeField({
      // Name of the field you are adding
      name: "slug",
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix
      value: `/blog${value}`
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  id
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        // this is some boilerlate to handle errors
        if (result.errors) {
          console.error(result.errors);
          reject(result.errors);
        }
        // We'll call `createPage` for each result
        result.data.allMdx.edges.forEach(({ node }) => {
          createPage({
            // This is the slug we created before
            // (or `node.frontmatter.slug`)
            path: node.fields.slug,
            // This component will wrap our MDX content
            component: require.resolve(`./src/templates/blogPosts.tsx`),
            // We can use the values in this context in
            // our page layout component
            context: { id: node.id }
          });
        });
      })
    );
  });
};

// exports.createPages = async ({ graphql, actions }) => {
//     const result = await graphql(`
//       {
//         allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
//           edges {
//             node {
//               name
//               childMdx {
//                 code {
//                   body
//                 }
//               }
//             }
//           }
//         }
//       }
//     `);

//     const pages = result.data.allFile.edges.map(({ node }) => node);
  
//     pages.forEach(page => {
//       actions.createPage({
//         path: `/${page.name}`,
//         component: require.resolve('./src/templates/blogPosts.tsx'),
//         context: {
//           body: page.childMdx.code.body
//         }
//       });
//     });
//   };