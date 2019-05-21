import * as React from 'react';
import { css } from '@emotion/core';

// CONTAINER

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
export const Container = ({children}: ContainerProps) => (
    <div css={container}>
        {children}
    </div>
)

// HEADER

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
export const Header = ({children}: HeaderProps) => (
    <div css={header}>
        {children}
    </div>
)

// HERO

const hero = css`
    grid-area: hero;
`;

interface HeroProps {
    children: React.ReactNode;
}

/**
 * A hero component. Part of the containers grid
 */
export const Hero = ({children}: HeroProps) => (
    <div css={hero}>
        {children}
    </div>
)

// CONTENT

const content = css`
    grid-area: content;
`;

interface ContentProps {
    children: React.ReactNode;
}

/**
 * A content component. Part of the containers grid
 */
export const Content = ({children}: ContentProps) => (
    <div css={content}>
        {children}
    </div>
)

// FOOTER 

const footer = css`
    grid-area: footer;
`;

interface FooterProps {
    children: React.ReactNode;
}

/**
 * A footer component. Part of the containers grid
 */
export const Footer = ({children}: FooterProps) => (
    <div css={footer}>
        {children}
    </div>
)