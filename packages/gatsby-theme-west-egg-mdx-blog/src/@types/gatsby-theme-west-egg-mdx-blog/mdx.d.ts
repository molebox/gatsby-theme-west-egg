declare module '*.mdx' {
    let MDXComponent: (props: any) => JSX.Element;
    export default MDXComponent;
  }

declare module 'gatsby-mdx/mdx-renderer';