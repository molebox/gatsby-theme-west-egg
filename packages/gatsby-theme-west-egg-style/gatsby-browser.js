import * as React from 'react';
import { Global, css } from '@emotion/core'

export const wrapRootElement = ({ element }) => {
    return (
        <div>
            <Global
            styles={css`
                *,
                *::before,
                *::after { 
                box-sizing: border-box;
                }
                
                body {
                margin: 0;
                overflow-x: hidden;
                }
            `}
            />
            {element}
        </div>
    );
  }