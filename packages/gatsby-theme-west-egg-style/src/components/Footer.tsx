import * as React from 'react';
import { css } from '@emotion/core';

const footer = css`
    grid-area: footer;
`;

interface FooterProps {
    children: React.ReactNode;
}

/**
 * A footer component. Part of the containers grid
 */
export default ({children}: FooterProps) => (
    <div css={footer}>
        {children}
    </div>
)