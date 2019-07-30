import React, { Component } from "react";
import {CardContent,Divider,Grid,Avatar,Card} from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import * as TextInput from "./Textinputs";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Listing9 from "./Listing9";
import { BrowserRouter} from 'react-router-dom';
import { Link, Route, Switch } from 'react-router-dom';

import Box from '@material-ui/core/Box';


function Listing1 () {
  	const [state, setState] = React.useState({
    	num: '',
    	name: 'hai',
 	});
	const inputLabel = React.useRef(null);
  	const [labelWidth, setLabelWidth] = React.useState(0);
  	React.useEffect(() => {
    	setLabelWidth(inputLabel.current.offsetWidth);
  	}, []);

  	const handleChange = name => event => {
    	setState({
	      ...state,
	      [name]: event.target.value,
	    });
	  };
    return (
    	<React.Fragment>
	    	<CssBaseline />
	      	<Container style={{height:'100vh',backgroundColor: 'white', textAlign:'center'}} maxWidth="xl">
                <Container style={{padding: 20}} maxWidth="md">
                    <Box 
                        color="tomato" 
                        borderBottom={4} 
                        borderColor="gainsboro" 
                        p={0}
                        style={{height: '2rem'}}
                    >
                        <Grid container spacing={0}>
                            <Grid item xs = {2}>
                                <Box 
                                    color="black" 
                                    bgcolor="white" 
                                    borderBottom={4} 
                                    borderColor="tomato" 
                                    p={0}
                                    style={{height: '2rem'}}
                                >
                                    Type of accomodation
                                </Box>
                            </Grid>
                            <Grid item xs>
                                Basics
                            </Grid>
                            <Grid item xs>
                                Housemates
                            </Grid>
                            <Grid item xs>
                                Rooms
                            </Grid>
                            <Grid item xs>
                                Features
                            </Grid>
                            <Grid item xs>
                                Rent
                            </Grid>
                            <Grid item xs>
                                Availabilities
                            </Grid>
                            <Grid item xs>
                                Photos
                            </Grid>
                            <Grid item xs = {2}>
                                Preferences and About
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
                <Container style={{position: 'absolute', left: 265,textAlign:'left', padding:10}} maxWidth="sm"><h4>Tell us more about who lives in the property?</h4>
                    <h4>What kind of accomodation are you listing?</h4>
			      	<p>ACCOMODATION TYPE</p>
			      	<FormControl 
			      		variant="outlined" 
			      		margin="normal"
			      		fullWidth
			      	>
				        <InputLabel ref={inputLabel} htmlFor="accomodation">
				          	Select one
				        </InputLabel>
				        <Select
					        native
					        value={state.accomodation}
					        onChange={handleChange('accomodation')}
					        input={
					        	<OutlinedInput name="accomodation" labelWidth={labelWidth} id="accomodation" />
				          	}
				        >
		          		<option value="" />
		          		<option value={0}>Entire Property</option>
		          		<option value={1}>Private Room</option>
		          		<option value={2}>Shared Room</option>
		        		</Select>
		      		</FormControl>
		      		<h6>Where is your place located?</h6>
		      		ADDRESS
		        	<TextField
			        	id="address"
			        	label="Address"
			        	placeholder="The Address of you listing"
			        	type="text"
			        	margin="normal"
			        	variant="outlined"
			        	helperText="This won't be revealed to users."
			        	fullWidth
			      	/>
		          	<BrowserRouter>
	                    <Button variant="contained" color="secondary" href={'../Listing9'}>Continue</Button>
	                    <Route path="/Listing9" component={() => <Listing9/>}/>
	                </BrowserRouter>
            	</Container>
        	</Container>
    	</React.Fragment>
    );
}
 
export default Listing1;

