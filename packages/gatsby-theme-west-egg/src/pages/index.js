import React from 'react';
import {Box, Title, Button} from 'gatsby-theme-west-egg-style';

export default () => (
    <div style={{margin: '5rem'}}>
        <Box>
            <Title>TEST</Title>
            <Button onClick={() => console.log('hit')} text="TEST"/>
        </Box>
    </div>
)