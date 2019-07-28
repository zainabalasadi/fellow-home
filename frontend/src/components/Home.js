import React, { Component } from 'react'
import axios from 'axios'
import * as buts from './Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import '../app/App.css';
import {ThemeProvider} from "@material-ui/styles";
import SnackBar from "./Snack";
import Check from "./Check";
import config from "../utils/config";
import * as TextInput from "./Textinputs";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import '../css/textAndColour.css'
import '../css/buttons.css'
import Fab from "@material-ui/core/Fab";
import ListingCard from "../components/ListingThumbnail"
<<<<<<< HEAD
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/core/SvgIcon/SvgIcon";
import AccountManager from "../components/AccountManager";
import Avatar from "@material-ui/core/Avatar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Profile from "../components/Profile";
import Login from "../components/Login";
import Listing from "../components/Listing";
import Register from "../components/Register";
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FF5240',
        },
        secondary: {
            main: '#FFB133',
        },
    },
    tertiary: {
        main: '#00A077'
    },
    light: {
        main: '#E4E4E4'
    },
    dark: {
        main: '#484848'
    },
    white: {
        main: '#FFFFFF',
    }
});
=======
import {theme} from './Theme'
import Login from "./Login";
import Register from "./Register";
>>>>>>> 9497fb5966de22abc92d7e1cc1a418d95cd1b7ee

class Home extends Component {
    constructor() {
        super();
        this.state = {
            message: "Hello Welcome to Fellow!",
            open : false
        };
    };
    componentDidMount() {
        this.getMessage();
    }
    getMessage() {
        axios.get('http://localhost:5000')
            .then((res) => {
                this.setState({ message: res.data.message });
                console.log(res.data.message);
            })
            .catch((err) => {
                console.log(err);
            })
    };


    render() {

        return (
            <React.Fragment>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <div><Check features={config.checkFeatures}/>
                    </div>
                    <div><Check features={config.checkFeatures}/>
                    </div>
                    <Container maxWidth="lg">
                        <p>This is main, in a container with padded sides</p>

                        <Login/>
                        <Register/>

                        <div className="action-buttons">
                            <buts.buttonPlus disabled={true}/>
                            <buts.buttonMinus/>
                            <buts.buttonFill
                                disabled={true}
                                colour={theme.colors.tertiary}
                                message={this.state.message}
                            />
                            <buts.buttonOutline
                                disabled={true}
                                colour={theme.colors.primary}
                                message={this.state.message}
                            />
                            <buts.buttonLink
                                colour={theme.colors.primary}
                                message={this.state.message}
                            />
                        </div>
                        <div>
                            <Fab size="small" color="primary" className="buttonPlusMinus" justify="centre">
                                <i className="settings icon"/>
                            </Fab>
                            <SnackBar fill={true} message="Not Here" buttonLabel="Click Here" colour={theme.colors.tertiary}/>
                        </div>
                        <div>
                            <Check features={config.checkFeatures}/>
                            <form>
                                <TextInput.Named/>
                                <TextInput.SelectDrop features={config.dropFeatures}/>
                                <TextInput.Password/>
                                <TextInput.InputText startAdornment={"$"} endAdornment={"%"}/>
                                <TextInput.Email/>
                                <TextInput.Disabled/>
                            </form>
                            <TextInput.FormModal color={theme.colors.primary} buttonLabel={"Open Modal"} submitLabel={"Check In"} message={
                                <DialogContent>
                                    <DialogContentText>
                                        To subscribe to this website, please enter your email address here. We will send updates
                                        occasionally.
                                    </DialogContentText>
                                    <TextInput.Email/>
                                </DialogContent>
                            }/>

                        </div>

                    </Container>
                    <ListingCard abstract={"This impressive paella is a perfect party dish and a fun meal to cook together with your\n" +
                    "                    guests. Add 1 cup of frozen peas along with the mussels, if you like."}/>

                </ThemeProvider>
            </React.Fragment>
        );
    };
}

export default Home;