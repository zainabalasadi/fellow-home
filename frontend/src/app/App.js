import React, { Component } from 'react'
import axios from 'axios'
import CssBaseline from '@material-ui/core/CssBaseline'
import './App.css';
import Footer from '../components/Footer'
import Header from '../components/Header'
import Profile from '../components/Profile'
import Listing from '../components/Listing'
import Listing1 from '../components/Listing1'
import Listing2 from '../components/Listing2'
import Listing3 from '../components/Listing3'
import Listing4 from '../components/Listing4'
import Listing5 from '../components/Listing5'
import Listing6 from '../components/Listing6'
import Listing7 from '../components/Listing7'
import Listing8 from '../components/Listing8'
import Listing9 from '../components/Listing9'
import About from '../components/About'
import Help from '../components/Help'
import {ThemeProvider} from "@material-ui/styles";
import MapContainer from "../components/MapContainer";
import Home from "../components/Home";
import ListingCard from "../components/ListingThumbnail";
import AccountManager from "../components/AccountManager";
import config from "../utils/config";
import {theme} from "../components/Theme"
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: config.userProfile,
			message: "Hello Welcome to Fellow!",
			isLoggedIn: config.userProfile.loggedin
		};
		this.onUserLogin=this.onUserLogin.bind(this);
		localStorage.setItem("login", "");
	}

	onUserLogin(){
		/*this.setState({user : event.target.value})*/
		this.setState({isLoggedIn : true});
		localStorage.setItem("login", "true");
	}

	onUserLogout(){
		/*this.setState({user : event.target.value})*/
		this.setState({isLoggedIn : false});
		localStorage.setItem("login", "");
	}

	render() {
		let login=localStorage.getItem("login");
		return (
			<React.Fragment>
				<ThemeProvider theme={theme}>
				<CssBaseline />
					<BrowserRouter>
						<Header onLogin={this.onUserLogin} loggedin={login} user={this.state.user} color={theme.colors.primary}/>
						<Switch>
							<Route exact path="/" component={() => <Home/>} />
							<Route path="/Listing" component={() => <Listing/>}/>
							<Route path="/Listing1" component={() => <Listing1/>}/>
							<Route path="/Listing2" component={() => <Listing2/>}/>
							<Route path="/Listing3" component={() => <Listing3/>}/>
							<Route path="/Listing4" component={() => <Listing4/>}/>
							<Route path="/Listing5" component={() => <Listing5/>}/>
							<Route path="/Listing6" component={() => <Listing6/>}/>
							<Route path="/Listing7" component={() => <Listing7/>}/>
							<Route path="/Listing8" component={() => <Listing8/>}/>
							<Route path="/Listing9" component={() => <Listing9/>}/>
							<Route path="/listings" component={() => <ListingCard/>}/>
							<Route path="/About" component={() => <About/>}/>
							<Route path="/saved" component={() => <ListingCard/>}/>
							<Route path="/message" component={() => <ListingCard/>}/>
							<Route path="/Help" component={() => <Help/>}/>
							<Route path="/profile" component={() => <AccountManager user={this.state.user}/>}>
							</Route>
						</Switch>
					</BrowserRouter>

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