import * as React from 'react';
import colors from '../utils/colors';
import { css } from '@emotion/core';

export interface BoxProps {
	noBackground?: boolean;
	noBorder?: boolean;
	children: React.ReactNode;
	color?: string;
	height?: string;
	width?: string;
	rounded?: boolean;
}

/**
 * A configurable box
 * @param noBackground Choose if the box should have no background color
 * @param noBorder Choose if the box should have no border
 * @param color Supply your own color for the background
 * @param height Optional box height
 * @param width Optional box width
 * @param children The contents of the box
 */
export default ({ children, noBackground, noBorder, color, height, width, rounded}: BoxProps) => {
	return (
		<div
			css={css`
				position: relative;
				height: ${height ? height : '100%'};
				width: ${width ? width : '100%'};
				margin: 0.5rem;
				& .bottom {
					position: absolute;
					left: 4px;
					top: 7px;
					width: 100%;
					height: 100%;
					background-color: ${noBackground ? 'none' : color ? color : undefined};
					display: block;
					border-radius: ${rounded ? '35px' : '0'}

				}
				& .top {
					position: relative;
					left: 10px;
					top: 0;
					height: 100%;
					padding: 24px 34px 22px 34px;
					border: 2px ${noBorder ? 'none' : 'solid'} ${colors.primary};
					border-radius: ${rounded ? '35px' : '0'}
				}
			`}
		>
			<div className="bottom" />
			<div className="top">{children}</div>
		</div>
	);
};
