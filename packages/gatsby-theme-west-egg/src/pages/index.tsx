import React from 'react';
import { Box, Text, Button, Grid, Container, Header, Hero, Content, Footer } from 'gatsby-theme-west-egg-style';
import { SEO } from 'gatsby-theme-west-egg-core';
import { StripeCheckout } from 'gatsby-theme-west-egg-stripe-cart';
import { Link } from 'gatsby';

import { useSiteMetadata } from 'gatsby-theme-west-egg-core/src/utils/Utilities';
import colors from 'gatsby-theme-west-egg-style/src/utils/colors';

const boxes = [
	<Box rounded noBackground>
		<Text>Im just a box waiting for content... Look at my radius! 😜</Text>
	</Box>,
	<Box noBorder noBackground>
		<StripeCheckout
			button={<Button text="Buy Using Stripe Checkout" type="submit" />}
			sku="sku_F2wt2pvjhQrs0w"
			quantity={1}
		/>
	</Box>,
];

export default () => {
	const { title, description, twitter } = useSiteMetadata();

	return (
		<Container>
			<SEO />
			<Header twoColumn>
				<Text>{title}</Text>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
					}}
				>
					<Link to="/blogIndex/">
						<Button text="blog" />
					</Link>
					<Button text="contact" />
				</div>
			</Header>
			<Hero>
				<Box color={colors.accent}>
					<Text fontSize="2rem">{description}</Text>
				</Box>
			</Hero>
			<Content>
				<Grid elements={boxes} />
			</Content>
			<Footer>
				<Box>
					<Text fontSize="2rem">{twitter}</Text>
				</Box>
			</Footer>
		</Container>
	);
};
