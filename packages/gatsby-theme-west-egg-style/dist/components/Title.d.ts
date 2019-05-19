import * as React from 'react';
interface TitleProps {
    fontSize?: string;
    fontWeight?: string;
    children: React.ReactNode;
}
declare const _default: ({ fontSize, fontWeight, children }: TitleProps) => JSX.Element;
/**
 * A configurable title
 * @param fontSize Optional font size - defaults to 3rem
 * @param fontWeight Optional font weight (300,400,400i,700) - defaults to 300
 * @param children The contents of the title
 */
export default _default;
