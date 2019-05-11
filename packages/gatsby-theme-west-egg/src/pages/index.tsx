import React from 'react';
import {Box, Title, Button} from 'gatsby-theme-west-egg-style';
import {StripeButton} from 'gatsby-theme-west-egg-stripe-cart';
import colors from 'gatsby-theme-west-egg-style/src/utils/colors';

export default () => (
    <div style={{margin: '5rem'}}>
        <Box color={colors.accent}>
            <Title fontWeight="400">TEST</Title>
            <Button onClick={() => console.log('hit')} text="TEST"/>
            <StripeButton/>
        </Box>
    </div>
)