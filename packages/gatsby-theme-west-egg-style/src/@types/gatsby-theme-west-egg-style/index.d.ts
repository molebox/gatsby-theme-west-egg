declare module 'gatsby-theme-west-egg-style' {
	interface BoxProps {
		noBackground?: boolean;
		noBorder?: boolean;
		children: React.ReactNode;
		color?: string;
		height?: string;
		width?: string;
		rounded?: boolean;
	}

	/**
	 * A configurable box
	 * @param noBackground Choose if the box should have no background color
	 * @param noBorder Choose if the box should have no border
	 * @param color Supply your own color for the background
	 * @param height Optional box height
	 * @param width Optional box width
	 * @param children The contents of the box
	 */
	export const Box: (props: BoxProps) => JSX.Element;

	interface Colors {
		primary: string;
		secondary: string;
		light: string;
		accent: string;
	}

	/**
	 * The base brand colors, can be imported and changed
	 */
	export const colors: Colors;

	interface TextProps {
		fontSize?: string;
		fontWeight?: string;
		children: React.ReactNode;
		color?: string;
	}

	/**
	 * A configurable text
	 * @param fontSize Optional font size - defaults to 3rem
	 * @param fontWeight Optional font weight (300,400,400i,700) - defaults to 300
	 * @param children The contents of the text
	 * @param color Optional color for the text
	 */
	export const Text: (props: TextProps) => JSX.Element;

	type Type = 'submit' | 'reset';
	interface ButtonProps {
		text: string;
		onClick?: () => void;
		type?: Type;
		disabled?: boolean;
	}

	/**
	 * A button with an off center foreground shadow
	 *
	 * The button is built with a natural 1.5rem margin
	 *
	 * @param text The buttons text
	 * @param onClick The onClick event of the button
	 * @param type The type of the button. submit or reset
	 * @param disabled Is the button disabled
	 */
	export const Button: (props: ButtonProps) => JSX.Element;

	interface GridProps {
		elements: React.ReactNode[];
	}

	/**
	 * A responsive container to display elements in a grid format
	 * @param elements An array of elements to be displayed in the conatiner
	 * @returns A responsive grid of elements
	 */
	export const Grid: (props: GridProps) => JSX.Element;

	interface ContainerProps {
		children: React.ReactNode[];
		customGrid?: string;
	}
	
	/**
	 * A container component that sets a grid layout
	 * @param children The children elements for the grid
	 * @param customGrid Optional custom grid layout
	 * @example default grid layout: 
		display: grid;
		grid-template-columns: .2fr 2fr .2fr;
		grid-template-rows: .5fr 1fr .5fr;

		grid-template-areas:
		". header ."
		". hero ."
		". content ."
		". footer .";

		height: 100vh;
		grid-gap: 2rem;
	*/
	export const Container: (props: ContainerProps) => JSX.Element;

	interface HeaderProps {
		children: React.ReactNode;
	}

	/**
	 * A header component. Part of the containers grid
	 */
	export const Header: (props: HeaderProps) => JSX.Element;

	interface HeroProps {
		children: React.ReactNode;
	}

	/**
	 * A hero component. Part of the containers grid
	 */
	export const Hero: (props: HeroProps) => JSX.Element;

	interface ContentProps {
		children: React.ReactNode;
	}

	/**
	 * A content component. Part of the containers grid
	 */
	export const Content: (props: ContentProps) => JSX.Element;

	interface FooterProps {
		children: React.ReactNode;
	}

	/**
	 * A footer component. Part of the containers grid
	 */
	export const Footer: (props: FooterProps) => JSX.Element;
}
