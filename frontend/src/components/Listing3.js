import React, { Component } from "react";

import {CardContent,Divider,Grid,Avatar,Card} from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
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
import Paper from '@material-ui/core/Paper';
import { BrowserRouter} from 'react-router-dom';
import { Link, Route, Switch } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import Listing4 from "./Listing4";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function Listing3 () {
    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
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
                                Type of accomodation
                            </Grid>
                            <Grid item xs>
                                Basics
                            </Grid>
                            <Grid item xs>
                                Housemates
                            </Grid>
                            <Grid item xs>
                                <Box 
                                    color="black" 
                                    bgcolor="white" 
                                    borderBottom={4} 
                                    borderColor="tomato" 
                                    p={0}
                                    style={{height: '2rem'}}
                                >
                                    Rooms
                                </Box>
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
                <Container style={{position: 'absolute', left: 265,textAlign:'left', padding:10}} maxWidth="sm">
    		      	<h4>Tell us about the rooms available</h4>
    		      	<p>ROOM NAME</p>
                    <TextField
                        id="room1"
                        placeholder="Room 1"
                        type="text"
                        margin="normal"
                        className={classes.formControl}
                        variant="outlined"
                        fullWidth
                    />
                    <p>ROOM TYPE</p>
                    <FormControl 
                        variant="outlined" 
                        margin="normal"
                        fullWidth
                        className={classes.formControl}
                    >
                        <InputLabel ref={inputLabel} htmlFor="roomtype">
                            Select one
                        </InputLabel>
                        <Select
                            native
                            value={state.adress}
                            onChange={handleChange('roomtype')}
                            input={
                                <OutlinedInput name="roomtype" labelWidth={labelWidth} id="roomtype" />
                            }
                        >
                        <option value="" />
                        <option value={0}>Small</option>
                        <option value={1}>Medium</option>
                        <option value={2}>Large</option>
                        </Select>
                    </FormControl>
                    <p>BATHROOM ACCESS</p>
                    <FormControl 
                        variant="outlined" 
                        margin="normal"
                        fullWidth
                        className={classes.formControl}
                    >
                        <InputLabel ref={inputLabel} htmlFor="bathroomaccess">
                            Select one
                        </InputLabel>
                        <Select
                            native
                            value={state.adress}
                            onChange={handleChange('bathroomaccess')}
                            input={
                                <OutlinedInput name="bathroomaccess" labelWidth={labelWidth} id="bathroomaccess" />
                            }
                        >
                        <option value="" />
                        <option value={0}>Yes</option>
                        <option value={1}>No</option>
                        </Select>
                    </FormControl>
                    + add another room
                    <BrowserRouter>
                        <Button variant="contained" color="secondary" href={'../Listing4'}>Continue</Button>
                        <Route path="/Listing4" component={() => <Listing4/>}/>
                    </BrowserRouter>
                </Container>
        	</Container>
    	</React.Fragment>
    );
}
 
export default Listing3;

