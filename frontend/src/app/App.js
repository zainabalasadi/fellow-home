import React, { Component } from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import './App.css';
import Footer from '../components/Footer'
import Header from '../components/Header'
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import MapContainer from "../components/MapContainer";
import '../css/textAndColour.css'
import '../css/buttons.css'


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
               <Header/>
						<Container maxWidth="lg">

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