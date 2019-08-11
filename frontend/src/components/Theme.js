/**
 * Fellow Material UI Theme
 * Written by: Jason Love, Zainab Alasadi
 */

import {createMuiTheme} from "@material-ui/core"

/**
 * Create material ui theme
 */
export const theme = createMuiTheme({
    /**
     * Primary and secondary colours
     */
    palette:{
        primary: {
            main: '#FF5240'
        },
        secondary: {
            main: '#FFB133'
        }
    },

    /**
     * Additional colours in pallette
     */
    colors: {
        primary: '#FF5240',
        secondary: '#FFB133',
        tertiary: '#00A077',
        dark: '#484848',
        light: '#E4E4E4',
        white: '#FFFFFF',
        grey: 'darkgray',
    },

    /**
     * Override with no shadows
     */
    shadows: ["none"],

    /**
     * Override button text transforms
     */
    typography: {
        button: {
            textTransform: 'none',
        },
    },

    /**
     * Override card shadows and interactive elements
     */
    overrides: {
        Card: {
          boxShadow: 'none',
        },
        MuiButtonBase: {
            disableRipple: true,
        },
    }
});