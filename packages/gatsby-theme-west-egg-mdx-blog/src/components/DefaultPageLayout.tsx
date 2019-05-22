// import * as React from 'react';
// import { graphql } from "gatsby";
// import MDXRenderer from "gatsby-mdx/mdx-renderer";

// function PageTemplate({ data: { mdx } }: any) {
//   return (
//     <div>
//       <h1>{mdx.frontmatter.title}</h1>
//       <MDXRenderer>{mdx.code.body}</MDXRenderer>
//     </div>
//   );
// }

// export const pageQuery = graphql`
//   query BlogPostQuery($id: String) {
//     mdx(id: { eq: $id }) {
//       id
//       frontmatter {
//         title
//       }
//       code {
//         body
//       }
//     }
//   }
// `;
// export default PageTemplate