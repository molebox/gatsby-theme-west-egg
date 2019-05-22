import React from 'react';
import {Box, Text, Button, Grid, Container, Header, Hero, Content, Footer} from 'gatsby-theme-west-egg-style';
import colors from 'gatsby-theme-west-egg-style/src/utils/colors';

const boxes = [
    <Box noBackground>
        <Text fontWeight="400">Box 1</Text>
    </Box>,
     <Box color={colors.light}>
        <Text fontWeight="400">Box 2</Text>
    </Box>,
    <Button text="I am a rad button"/>,
    <Box noBackground>
        <Text fontWeight="400">Box 4</Text>
    </Box>,
    <Button text="I am a rad button"/>,
     <Box color={colors.accent}>
        <Text fontWeight="400">Box 6</Text>
    </Box>,
]

export default () => (
    <Container>
        <Header>
            <Text>Gatbsy West Egg Theme</Text>
        </Header>
        <Hero>
            <Box color={colors.accent}>
                <Text fontSize="2rem">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Beatae at eius asperiores voluptatibus est, animi nemo odio recusandae ut cumque, iure, repellendus nam dolorem dignissimos dolore. Quia recusandae non molestias.
                </Text>
            </Box>
        </Hero>
        <Content>
            <Box noBackground>
                <Grid elements={boxes}/>
            </Box>
        </Content>
        <Footer>
            <Text fontSize="2rem">Some content here in the footer</Text>
        </Footer>
    </Container>
)