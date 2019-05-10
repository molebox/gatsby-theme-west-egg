import React from 'react';
import {Box, Title, Button} from 'gatsby-theme-west-egg-style';
import colors from 'gatsby-theme-west-egg-style/src/utils/colors';

export default () => (
    <div style={{margin: '5rem'}}>
        <Box rounded color={colors.light}>
            <Title fontWeight="700">TEST</Title>
            <Button onClick={() => console.log('hit')} text="TEST"/>
        </Box>
    </div>
)