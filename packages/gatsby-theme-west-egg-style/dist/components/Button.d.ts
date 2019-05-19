/// <reference types="react" />
export declare const buttonBorderLeft: import("@emotion/utils").SerializedStyles;
export declare const buttonBorderRight: import("@emotion/utils").SerializedStyles;
export declare const buttonBorderTop: import("@emotion/utils").SerializedStyles;
export declare const buttonBorderBottom: import("@emotion/utils").SerializedStyles;
export declare const buttonDark: import("@emotion/utils").SerializedStyles;
export declare const buttonBorder: import("@emotion/utils").SerializedStyles;
export declare const button: import("@emotion/utils").SerializedStyles;
declare type Type = 'submit' | 'reset';
interface ButtonProps {
    text: string;
    onClick?: () => void;
    type?: Type;
    disabled?: boolean;
}
declare const _default: ({ text, onClick, type, disabled }: ButtonProps) => JSX.Element;
/**
 * A button with an off center foreground shadow
 *
 * The button is built with a natural 1.5rem margin
 *
 * @param text The buttons text
 * @param onClick The onClick event of the button - optional
 */
export default _default;
