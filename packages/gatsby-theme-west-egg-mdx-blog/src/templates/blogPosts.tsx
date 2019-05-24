import * as React from 'react';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';

export default ({ data: { mdx } }: any) => (
	<div>
		<h1>{mdx.frontmatter.title}</h1>
		<MDXRenderer>{mdx.code.body}</MDXRenderer>
	</div>
);

export const pageQuery = graphql`
	query BlogPostQuery($id: String) {
		mdx(id: { eq: $id }) {
			id
			frontmatter {
				title
			}
			code {
				body
			}
		}
	}
`;

// import MDXRenderer from 'gatsby-mdx/mdx-renderer';
// export default ({ pageContext }: any) => <MDXRenderer>{pageContext.body}</MDXRenderer>;
