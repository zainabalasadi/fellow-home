import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'
import './App.css';
import '../css/buttons.css'
import MapContainer from '../components/MapContainer';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import config from '../utils/config'
import Check  from '../components/check'
import SnackBar from '../components/snack'
import * as TextInput from '../components/textinputs'
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogContent from "@material-ui/core/DialogContent";

var Ratng = require('react-rating');
const { AddCircle, AddCircleOutline, Remove } = require('@material-ui/icons');
const green = require('@material-ui/core/colors/green').default;
const red = require('@material-ui/core/colors/red').default;

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FF5240',
        },
        secondary: {
            main: '#FFB133',
        },
        tertiary: {
            main: '#00A077'
        },
        dark: {
            main: '#484848'
        },
        light: {
            main: '#E4E4E4'
        },
        white: {
            main: '#FFFFFF'
        }
    },
});


class App extends Component {
    constructor() {
        super();
        this.state = {
            message: ""
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
            <ThemeProvider theme={theme}>
                <div className="content">
                    <div className="action-buttons">

                        <Button variant="contained" color="primary" className="inactive">
                            {
                                this.state.message
                            }
                            {
                                this.state.message
                            }
                        </Button>
                        <Fab size="small" className="buttonPlusMinus">
                            <i className="setting icon"/>
                        </Fab>
                        <button className="buttonPlusMinus textFellowRed backgroundFellowWhite lineFellowRed">+</button>
                        <button className="buttonPlusMinus lineFellowRed inactive">-</button>
                        <button className="buttonRect backgroundFellowLight textFellowDark lineFellowYellow"> Delete</button>

                        <SnackBar message="Not Here" buttonLabel="Click Here" buttonStyle="backgroundFellowGreen lineFellowWhite textFellowWhite buttonRect"/>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <input type="text" className="textbox" />
                        <Check features={config.checkFeatures}/>
                        <form>

                            <TextInput.SelectDrop features={config.dropFeatures}/>
                            <TextInput.Password/>
                            <TextInput.InputText startAdornment={"$"} endAdornment={"%"}/>
                            <TextInput.Email/>
                            <TextInput.Disabled/>
                        </form>
                        <TextInput.FormDialog buttonLabel={"Open Modal"} submitLabel={"Check In"} message={
                            <DialogContent>
                                <DialogContentText>
                                    To subscribe to this website, please enter your email address here. We will send updates
                                    occasionally.
                                </DialogContentText>
                                <TextInput.Email/>
                            </DialogContent>
                        }/>

                    </div>
                    <div>
                        <MapContainer  />
                    </div>
                </div>
            </ThemeProvider>
        );
    };
}

export default App;