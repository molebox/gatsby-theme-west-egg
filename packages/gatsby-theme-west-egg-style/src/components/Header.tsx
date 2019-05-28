import * as React from 'react';
import { css } from '@emotion/core';

interface HeaderProps {
    children: React.ReactNode;
    twoColumn?: boolean;
}

/**
 * A header component. Part of the containers grid
 * @param children The contents of the header, can include buttons
 * @param twoColumn Boolean, decides if header is split into two columns or not
 */
export default ({children, twoColumn}: HeaderProps) => (
    <div css={css`
    grid-area: header;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(1fr, 1fr));
    ${twoColumn ? (`
    grid-template-areas: 
    "text text text";
    width: 100%;`
    ) : null}
    margin: 1rem;
`}>
        {children}
    </div>
)