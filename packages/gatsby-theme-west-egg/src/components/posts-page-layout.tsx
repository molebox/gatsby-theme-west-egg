// src/components/posts-page-layout.js
import * as React from "react";
import { graphql, Link } from "gatsby";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { Container, Text, Header, Button, Hero } from 'gatsby-theme-west-egg-style';

function PageTemplate({ data: { mdx }}: any) {
  return (
    <Container>
      <Header twoColumn>
        <Text >{mdx.frontmatter.title}</Text>
        <div
					style={{
						display: 'flex',
						flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
					}}
				>
					<Link to="/blogIndex">
						<Button text="im done reading this.." />
					</Link>
				</div>
      </Header>
      <Hero>
        <MDXRenderer>{mdx.code.body}</MDXRenderer>
      </Hero>
    </Container>
  );
}
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
export default PageTemplate