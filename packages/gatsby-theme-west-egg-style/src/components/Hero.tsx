import * as React from 'react';
import { css } from '@emotion/core';

const hero = css`
    grid-area: hero;
`;

interface HeroProps {
    children: React.ReactNode;
}

/**
 * A hero component. Part of the containers grid
 */
export default ({children}: HeroProps) => (
    <div css={hero}>
        {children}
    </div>
)
