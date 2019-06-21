import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button'
import logo from './logo.svg';
import './App.css';

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
			<Button variant="contained" color="primary">
			{   
				this.state.message
			}   
			{   
				this.state.message
			}   
			</Button>
		);  
	};  
}

export default App;
