import * as React from 'react';
import { css } from '@emotion/core';

const content = css`
    grid-area: content;
`;

interface ContentProps {
    children: React.ReactNode;
}

/**
 * A content component. Part of the containers grid
 */
export default ({children}: ContentProps) => (
    <div css={content}>
        {children}
    </div>
)