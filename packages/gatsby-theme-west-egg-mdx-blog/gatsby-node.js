    
exports.createPages = async ({ graphql, actions }) => {
    const result = await graphql(`
      {
        allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
          edges {
            node {
              name
              childMdx {
                code {
                  body
                }
              }
            }
          }
        }
      }
    `);

    const pages = result.data.allFile.edges.map(({ node }) => node);
  
    pages.forEach(page => {
      actions.createPage({
        path: `/${page.name}`,
        component: require.resolve('./src/templates/blogPosts.tsx'),
        context: {
          body: page.childMdx.code.body
        }
      });
    });
  };