import * as React from 'react'
import { Link, graphql } from 'gatsby'
import {Box, Text, Container, Hero, Header, Grid, Button} from 'gatsby-theme-west-egg-style';
import colors from 'gatsby-theme-west-egg-style/src/utils/colors';

export default ({ data }: any) => {
  const { edges: posts } = data.allMdx

  const blogPosts = posts.map(({ node: post }: any) => (
      <Box 
        key={post.id} 
        color={colors.accent}
        height="200px"
      >
        <Text fontSize="2rem">{post.excerpt}</Text>
        <Link to={post.fields.slug}>
          <Button text={post.frontmatter.title}/>
        </Link>
      </Box>
  ))

  return (
    <Container>
      <Header>
        <Text>West Egg Blog</Text>
        <Link to="/">
          <Button text="home"/>
        </Link>
      </Header>
      <Hero>
        <Grid elements={blogPosts}/>
      </Hero>
    </Container>
  )
}
export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`