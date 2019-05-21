import * as React from 'react';
import { css } from '@emotion/core';
import colors from '../utils/colors';

export const buttonBorderLeft = css`
	left: -2px;
	bottom: -2px;
	width: 2px;
	height: 0;
`;

export const buttonBorderRight = css`
	right: -2px;
	top: -2px;
	width: 2px;
	height: 0;
`;

export const buttonBorderTop = css`
	left: -2px;
	top: -2px;
	width: 0;
	height: 2px;
`;

export const buttonBorderBottom = css`
	right: -2px;
	bottom: -2px;
	width: 0;
	height: 2px;
`;

export const buttonDark = css`
	& .top {
		border: 2px solid ${colors.secondary};
	}
	& .top .label {
		color: ${colors.secondary};
	}
`;

export const buttonBorder = css`
	position: absolute;
	background-color: ${colors.primary};
	-webkit-transition: all 0.25s ease-out;
	-moz-transition: all 0.25s ease-out;
	-o-transition: all 0.25s ease-out;
	transition: all 0.25s ease-out;
`;

export const button = css`
	display: inline-block;
	text-decoration: none;
	position: relative;
	background-color: Transparent;
	border: none;
	cursor: pointer;
	outline: none;

	& .bottom {
		position: absolute;
		left: 7px;
		top: 9px;
		width: 99%;
		height: 100%;
		background-color: ${colors.secondary};
		display: block;
		-webkit-transition: all 0.2s ease-out;
		-moz-transition: all 0.2s ease-out;
		-o-transition: all 0.2s ease-out;
		transition: all 0.2s ease-out;
	}

	& .top {
		position: relative;
		left: 10px;
		top: 0;
		padding: 24px 34px 22px 34px;
		border: 2px solid ${colors.primary};
	}

	& .top .label {
		font-family: Montserrat;
		font-weight: 700;
		color: ${colors.primary};
		font-size: 1rem;
		line-height: 110%;
		letter-spacing: 2px;
		text-align: center;
		// text-transform: uppercase;
		-webkit-transition: all 0.15s ease-out;
		-moz-transition: all 0.15s ease-out;
		-o-transition: all 0.15s ease-out;
		transition: all 0.15s ease-out;
	}
	&:active:enabled {
		${buttonDark}
	}

	&:disabled {
		opacity: 0.55;
	}

	&:hover:enabled .bottom {
		left: 10px;
		top: 0;
		background-color: ${colors.light};
	}
	&:hover:enabled .top .label {
		color: ${colors.primary};
		cursor: pointer;
	}
	&:hover:enabled .top .${buttonBorderLeft}, &:hover .top .${buttonBorderRight} {
		height: calc(100% + 2px);
		cursor: pointer;
	}
	&:hover:enabled .top .${buttonBorderTop}, &:hover .top .${buttonBorderBottom} {
		width: calc(100% + 2px);
		cursor: pointer;
	}
`;

type Type = 'submit' | 'reset';

interface ButtonProps {
	text: string;
	onClick?: () => void;
	type?: Type;
	disabled?: boolean;
}

/**
 * A button with an off center foreground shadow
 *
 * The button is built with a natural 1.5rem margin
 *
 * @param text The buttons text
 * @param onClick The onClick event of the button - optional
 * @param type The type of the button. submit or reset - optional
 * @param disabled Is the button disabled
 */
export default ({ text, onClick, type, disabled }: ButtonProps) => (
	<div
		css={{
			display: 'flex',
			margin: '1.5rem',
		}}
	>
		<button disabled={disabled} type={type} aria-label={text} name={text} onClick={onClick} css={button}>
			<div className="bottom" />
			<div className="top">
				<div className="label">{text}</div>
				<div css={buttonBorder} />
				<div css={buttonBorderLeft} />
				<div css={buttonBorder} />
				<div css={buttonBorderTop} />
				<div css={buttonBorder} />
				<div css={buttonBorderRight} />
				<div css={buttonBorder} />
				<div css={buttonBorderBottom} />
			</div>
		</button>
	</div>
);
