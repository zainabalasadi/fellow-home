import React, { Component } from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import './App.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import SnackBar from "../components/snack";
import Check from "../components/check";
import config from "../utils/config";
import * as TextInput from "../components/textinputs";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import MapContainer from "../components/MapContainer";
import '../css/textAndColour.css'
import '../css/buttons.css'
import Fab from "@material-ui/core/Fab";
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
			message: "Hello Welcome to Fellow!"
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
				<Header />
				<Container maxWidth="lg">
					<p>This is main, in a container with padded sides</p>
					<div className="action-buttons">
					<Button variant="contained" color="primary">
						{
							this.state.message
						}
					</Button>
						<Button variant="outlined" color="Light">
							{
								this.state.message
							}
						</Button>
						<Button disabled variant="contained" color="Dark">
							{
								this.state.message
							}
						</Button>
					</div>
					<div>
						<Fab size="small" color="Primary" className="buttonPlusMinus">
							<i className="settings icon"/>
						</Fab>
						<button className="buttonPlusMinus textFellowRed backgroundFellowWhite lineFellowRed">+</button>
						<button className="buttonPlusMinus lineFellowRed textFellowRed backgroundFellowWhite inactive">-</button>
						<SnackBar message="Not Here" buttonLabel="Click Here" buttonStyle="backgroundFellowGreen lineFellowWhite textFellowWhite buttonRect"/>
					</div>
					<div>
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

				</Container>

				<Footer />
					<div>
						<MapContainer  />
					</div>
				</ThemeProvider>
			</React.Fragment>
		);
	};
}

export default App;