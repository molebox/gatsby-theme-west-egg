import * as React from 'react';
export interface BoxProps {
    noBackground?: boolean;
    noBorder?: boolean;
    children: React.ReactNode;
    color?: string;
    height?: string;
    width?: string;
    rounded?: boolean;
}
declare const _default: ({ children, noBackground, noBorder, color, height, width, rounded }: BoxProps) => JSX.Element;
/**
 * A configurable box
 * @param noBackground Choose if the box should have no background color
 * @param noBorder Choose if the box should have no border
 * @param color Supply your own color for the background
 * @param height Optional box height
 * @param width Optional box width
 * @param children The contents of the box
 */
export default _default;
