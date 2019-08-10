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
import Search from '../components/Search'
import Saved from '../components/Saved'
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
		this.onUserLogout=this.onUserLogout.bind(this);
		localStorage.setItem("login", "");
	}

	onUserLogin(){
		/*this.setState({user : event.target.value})*/
		this.setState({isLoggedIn : true});
		localStorage.setItem("login", "true");
	}

	onUserLogout(){
		this.setState({isLoggedIn : false});
        axios.post('http://localhost:5000/api/auth/logout', {
            token: localStorage.getItem('token')
        });
		localStorage.clear();
	}

	render() {
		let login=localStorage.getItem("login");
		return (
			<React.Fragment>
				<ThemeProvider theme={theme}>
				<CssBaseline />
					<BrowserRouter>
						<Header onLogin={this.onUserLogin} onUserLogout={this.onUserLogout} loggedin={login} user={this.state.user} color={theme.colors}/>
						<Switch>
							<Route exact path="/" component={()   => <Home color={theme.colors}/>}/>
							<Route path="/Listing1" component={() => <Listing1 color={theme.colors}/>}/>
							<Route path="/Listing2" component={() => <Listing2 color={theme.colors}/>}/>
							<Route path="/Listing3" component={() => <Listing3 color={theme.colors}/>}/>
							<Route path="/Listing4" component={() => <Listing4 color={theme.colors}/>}/>
							<Route path="/Listing5" component={() => <Listing5 color={theme.colors}/>}/>
							<Route path="/Listing6" component={() => <Listing6 color={theme.colors}/>}/>
							<Route path="/Listing7" component={() => <Listing7 color={theme.colors}/>}/>
							<Route path="/Listing8" component={() => <Listing8 color={theme.colors}/>}/>
							<Route path="/Listing9" component={() => <Listing9 color={theme.colors}/>}/>
							<Route path="/Saved" component={()    => <Saved color={theme.colors}/>}/>
							<Route path="/Search" component={()   => <Search color={theme.colors}/>}/>
							<Route path="/listings" component={() => <ListingCard/>}/>
							<Route path="/About" component={()    => <About/>}/>
							<Route path="/message" component={()  => <ListingCard/>}/>
							<Route path="/Help" component={()     => <Help/>}/>
							<Route path="/profile" component={()  => <AccountManager user={this.state.user}/>}>
							</Route>
							<Route path="/user/:uid" component={(props) => 
                                <AccountManager {...props} user={this.state.user}/>}>
							</Route>
							<Route path="/listing/:id" component={(props) => 
                                <Listing {...props} color={theme.colors}/>}>
							</Route>
						</Switch>
					</BrowserRouter>

				<Footer />
                    <div style={{display: "none"}}>
                        <MapContainer  listingLocation={false} listingPage={false}/>
                    </div>
				</ThemeProvider>
			</React.Fragment>
		);
	};
}

export default App;
