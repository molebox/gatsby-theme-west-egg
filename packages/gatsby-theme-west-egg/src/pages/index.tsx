import React from 'react';
import {Box, Title, Button} from 'gatsby-theme-west-egg-style';
import colors from 'gatsby-theme-west-egg-style/src/utils/colors';
import { StripeCheckout } from 'gatsby-theme-west-egg-stripe-cart';


export default () => (
    <div style={{margin: '5rem'}}>
        <Box color={colors.accent}>
            <Title fontWeight="400">TEST</Title>
            <StripeCheckout 
                button={<Button type="submit" text="Buy"/>}
                sku='sku_F2wt2pvjhQrs0w'
                quantity={1}
            />
           
        </Box>
    </div>
)