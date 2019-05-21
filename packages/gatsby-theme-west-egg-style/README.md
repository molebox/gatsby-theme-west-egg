# gatsby-theme-west-egg-style

A Gatsby theme that provides a set of styled components.

Add to your Gatsby sites gatsby-config.js just like you would with a plugin.

```
module.exports = {

    __experimentalThemes: ['gatsby-theme-west-egg-style']
}
```

Example usage:

```
import React from 'react';
import {Box, Title, Button, Grid, Container, Header, Hero, Content, Footer} from 'gatsby-theme-west-egg-style';
import colors from 'gatsby-theme-west-egg-style/src/utils/colors';

const boxes = [
    <Box noBackground>
        <Title fontWeight="400">Box 1</Title>
    </Box>,
     <Box color={colors.light}>
        <Title fontWeight="400">Box 2</Title>
    </Box>,
    <Button text="I am a rad button"/>,
    <Box noBackground>
        <Title fontWeight="400">Box 4</Title>
    </Box>,
    <Button text="I am a rad button"/>,
     <Box color={colors.accent}>
        <Title fontWeight="400">Box 6</Title>
    </Box>,
]

export default () => (
    <Container>
        <Header>
            <Title>Gatbsy West Egg Theme</Title>
        </Header>
        <Hero>
            <Box color={colors.accent}>
                <Title fontSize="2rem">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Beatae at eius asperiores voluptatibus est, animi nemo odio recusandae ut cumque, iure, repellendus nam dolorem dignissimos dolore. Quia recusandae non molestias.
                </Title>
            </Box>
        </Hero>
        <Content>
            <Box noBackground>
                <Grid elements={boxes}/>
            </Box>
        </Content>
        <Footer>
            <Title fontSize="2rem">Some content here in the footer</Title>
        </Footer>
    </Container>
)
```

Produces: 

<img src="readmeImages/west-egg-style-example.PNG">


Current status: WIP

## Built With

- [Gatbsy](https://www.gatsbyjs.org/)
- [Emotion](https://emotion.sh/docs/introduction)
- [TypeScript](https://www.typescriptlang.org/)

## Authors

- **Rich Haines** - _Hungry Bear Studio_

## License

This project is licensed under the MIT License
