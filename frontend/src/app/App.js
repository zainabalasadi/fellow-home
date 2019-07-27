import React, { Component } from 'react'
import axios from 'axios'
import CssBaseline from '@material-ui/core/CssBaseline'
import './App.css';
import Footer from '../components/Footer'
import Header from '../components/Header'
import {ThemeProvider} from "@material-ui/styles";
import MapContainer from "../components/MapContainer";
import '../css/textAndColour.css'
import '../css/buttons.css'
import Home from "../components/Home";
import ListingCard from "../components/ListingThumbnail";
import AccountManager from "../components/AccountManager";
import config from "../utils/config";
import {theme} from "../components/Theme"
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
	constructor() {
		super();
		this.state = {
			loggedin: false,
			user: null,
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
					<BrowserRouter>
						<Header loggedin={this.loggedin} user={this.user} colour={theme.colors.primary}/>
						<Switch>

							<Route exact path="/" component={() => <Home/>} />
							<Route path="/listings" component={() => <ListingCard/>}/>
							<Route path="/saved" component={() => <ListingCard/>}/>
							<Route path="/message" component={() => <ListingCard/>}/>
							<Route path="/help" component={() => <ListingCard/>}/>
							<Route path="/profile" component={() => <AccountManager user={config.userProfile}/>}>
							</Route>
						</Switch>
					</BrowserRouter>
                  <Header/>

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