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
import Listing3 from "./Listing3";
import { Link, Route, Switch } from 'react-router-dom';

import Box from '@material-ui/core/Box';

function Listing2 () {
    const [values, setValues] = React.useState({
            name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    return (
        <React.Fragment>
        <CssBaseline/>
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
                <Container style={{position: 'absolute', left: 265,textAlign:'left', padding:10}} maxWidth="sm"><h4>Tell us more about who lives in the property?</h4>
                    <p>Current number of housemates</p>
                    <TextField
                        id="housemates"
                        value={values.age}
                        onChange={handleChange('age')}
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="dense"
                        variant="outlined"
                    />
                    
                    <p>Number of Vacancies</p>
                    {/* error as number occurs in both boxes}
                    <TextField
                        id="vacancies"
                        value={values.age}
                        onChange={handleChange('age')}
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="dense"
                        variant="outlined"
                    />*/}
                    <BrowserRouter>
                        <Button variant="contained" color="secondary" href={'../Listing3'}>Continue</Button>
                        <Route path="/Listing3" component={() => <Listing3/>}/>
                    </BrowserRouter>
                </Container>
            </Container>
        </React.Fragment>
    );
}
 
export default Listing2;

