import {createMuiTheme} from "@material-ui/core";
export const theme = createMuiTheme({
    colors: {
        primary: '#FF5240',
        secondary: '#FFB133',
        tertiary: '#00A077',
        dark: '#484848',
        light: '#E4E4E4',
        white: '#FFFFFF'
    },
    overrides: {
        MuiAppBar: {
          boxShadow: 'none',
        },
        MuiButtonBase: {
            disableRipple: true,
        },
    }
});

