/** @jsx jsx */ 
import { jsx, css } from '@emotion/core';

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
export default ({children, customGrid}: ContainerProps) => (
    <div css={css`
    ${customGrid ? customGrid : 
        `display: grid;
        grid-template-columns: .2fr 2fr .2fr;
        grid-template-rows: .5fr 1fr .5fr;
    
        grid-template-areas:
        "header header header"
        ". hero ."
        "content content content"
        "footer footer footer";
    
        height: 100vh;
        grid-gap: 2rem;`
    }
`}>
        {children}
    </div>
)