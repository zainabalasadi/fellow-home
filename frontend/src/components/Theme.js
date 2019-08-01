import {createMuiTheme} from "@material-ui/core";
import { nominalTypeHack } from "prop-types";
export const theme = createMuiTheme({
    colors: {
        primary: '#FF5240',
        secondary: '#FFB133',
        tertiary: '#00A077',
        dark: '#484848',
        light: '#E4E4E4',
        white: '##FAFAFA',
        grey: 'darkgray',
    },
    typography: {
        button: {
            textTransform: 'none',
        },
    },
    overrides: {
        Card: {
          boxShadow: 'none',
        },
        MuiButtonBase: {
            disableRipple: true,
        },
    }
});

