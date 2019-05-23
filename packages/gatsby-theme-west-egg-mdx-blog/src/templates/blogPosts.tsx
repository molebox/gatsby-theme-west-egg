import * as React from 'react';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';

export default ({ pageContext }: any) => <MDXRenderer>{pageContext.body}</MDXRenderer>;
