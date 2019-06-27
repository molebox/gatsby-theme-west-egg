/** @jsx jsx */ 
import { jsx, css } from '@emotion/core';

interface GridProps {
	elements: React.ReactNode[];
}

/**
 * A responsive container to display elements in a grid format
 * @param elements An array of elements to be displayed in the conatiner
 * @returns A responsive grid of elements
 */
export default ({ elements }: GridProps) => {

	return (
		<div
		css={css`
			margin: 1rem;
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
			grid-gap: 2rem;
            width: 100%;
			height: 100%;
			grid-auto-flow: dense;
		`}
		>
		{elements.map((element) => element)}
		</div>
	)
}
