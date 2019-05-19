declare module 'gatsby-theme-west-egg-style' {

    interface BoxProps {
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
    export const Box: (props: BoxProps) => JSX.Element;

    interface Colors {
        primary: string;
        secondary: string;
        light: string;
        accent: string;
    }

    /**
     * The base brand colors, can be imported and changed
     */
    export const colors: Colors;

    interface TitleProps {
        fontSize?: string;
        fontWeight?: string;
        children: React.ReactNode;
    }

    /**
     * A configurable title
     * @param fontSize Optional font size - defaults to 3rem
     * @param fontWeight Optional font weight (300,400,400i,700) - defaults to 300
     * @param children The contents of the title
     */
    export const Title: (props: TitleProps) => JSX.Element;

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
     * @param onClick The onClick event of the button
     */
    export const Button: (props: ButtonProps) => JSX.Element;
}