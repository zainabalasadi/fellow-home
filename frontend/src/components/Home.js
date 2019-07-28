import React, { Component } from 'react'
import axios from 'axios'
import * as Buttons from './Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import '../app/App.css';
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
import {theme} from './Theme'
import Button from '@material-ui/core/Button'

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
                    <CssBaseline />
                    <div><Check features={config.checkFeatures}/>
                    </div>
                    <div><Check features={config.checkFeatures}/>
                    </div>
                    <Container maxWidth="lg">
                        <p>This is main, in a container with padded sides</p>

                        <Button disableRipple href={'../Profile'}>prof</Button>

                        <div className="action-buttons">
                            <Buttons.ButtonPlus disabled={true}/>
                            <Buttons.ButtonMinus/>
                            <Buttons.ButtonFill
                                disabled={true}
                                color={theme.colors.tertiary}
                                message={this.state.message}
                            />
                            <Buttons.ButtonOutline
                                disabled={true}
                                color={theme.colors.primary}
                                message={this.state.message}
                            />
                            <Buttons.ButtonLink
                                color={theme.colors.primary}
                                message={this.state.message}
                            />
                        </div>
                        <div>
                            <Fab size="small" color="primary" className="buttonPlusMinus" justify="centre">
                                <i className="settings icon"/>
                            </Fab>
                            <SnackBar fill={true} message="Not Here" buttonLabel="Click Here" color={theme.colors.tertiary}/>
                        </div>
                        <div>
                            <Check features={config.checkFeatures}/>
                            <form>
                                <TextInput.Named/>
                                <TextInput.SelectDrop features={config.dropFeatures}/>
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

            </React.Fragment>
        );
    };
}

export default Home;