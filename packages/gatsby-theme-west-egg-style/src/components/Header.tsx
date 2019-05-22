import * as React from 'react';
import { css } from '@emotion/core';

const header = css`
    grid-area: header;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(1fr, 1fr));
`;

interface HeaderProps {
    children: React.ReactNode;
}

/**
 * A header component. Part of the containers grid
 */
export default ({children}: HeaderProps) => (
    <div css={header}>
        {children}
    </div>
)