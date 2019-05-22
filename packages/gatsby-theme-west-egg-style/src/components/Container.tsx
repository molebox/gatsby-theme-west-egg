import * as React from 'react';
import { css } from '@emotion/core';

const container = css`
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
`;

interface ContainerProps {
    children: React.ReactNode[];
}

/**
 * A container component that sets a grid layout
 */
export default ({children}: ContainerProps) => (
    <div css={container}>
        {children}
    </div>
)