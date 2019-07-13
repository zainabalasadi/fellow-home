import React, { Component } from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import './App.css'


import logo from '../assets/images/logo.svg'
import Footer from '../components/Footer'
import Header from '../components/Header'

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
         <CssBaseline />
            <Header />
				<Container maxWidth="lg">
					<p>This is main, in a container with padded sides</p>
					<Button variant="contained" color="primary">
					{   
						this.state.message
					}    
					</Button>
            </Container>
				<Footer />
			</React.Fragment>
		);  
	};  
}

export default App;