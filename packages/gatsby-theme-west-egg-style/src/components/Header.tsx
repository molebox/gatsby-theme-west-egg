import * as React from 'react';
import { css } from '@emotion/core';

const header = css`
    grid-area: header;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(1fr, 1fr));
    grid-template-areas: 
    "title title buttons";
    width: 100%;
    margin: 1rem;
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