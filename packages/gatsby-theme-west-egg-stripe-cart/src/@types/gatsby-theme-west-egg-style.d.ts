declare module 'gatsby-theme-west-egg-style' {
	type Type = 'submit' | 'reset';

	interface ButtonProps {
		text: string;
		onClick: () => void;
		type?: Type;
	}

	/**
	 * A button with an off center foreground shadow
	 *
	 * The button is built with a natural 1.5rem margin
	 *
	 * @param text The buttons text
	 * @param onClick The onClick event of the button
	 */
	export const Button: (props: ButtonProps) => JSX.Element;
}
