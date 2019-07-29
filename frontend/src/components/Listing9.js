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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import config from "../utils/config";
import Check from "./Check";
import Box from '@material-ui/core/Box';

import Listing2 from "./Listing2";


function Listing9 () {
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

    const [values, setValues] = React.useState({
            name: 'Cat in the Hat',
    num: '',
    multiline: 'Controlled',
    currency: 'EUR',
    });

    const handleNoChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
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
                                <Box 
                                    color="black" 
                                    bgcolor="white" 
                                    borderBottom={4} 
                                    borderColor="tomato" 
                                    p={0}
                                    style={{height: '2rem'}}
                                >
                                    Basics
                                </Box>
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
                <Container style={{position: 'absolute', left: 265,textAlign:'left', padding:10}} maxWidth="sm">
                    <h4>Tell us more about the property</h4>
                    <p>Total number of bedrooms</p>
                    <p>Total number of bathrooms</p>
                    <TextField
                        id="housemates"
                        value={values.num}
                        onChange={handleNoChange('num')}
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="dense"
                        variant="outlined"
                    />
                    <p>PARKING</p>
                    <FormControl 
                        variant="outlined" 
                        margin="normal"
                        fullWidth
                    >
                        <InputLabel ref={inputLabel} htmlFor="parking">
                            Select one
                        </InputLabel>
                        <Select
                            native
                            value={state.adress}
                            onChange={handleChange('parking')}
                            input={
                                <OutlinedInput name="parking" labelWidth={labelWidth} id="parking" />
                            }
                        >
                        <option value="" />
                        <option value={0}>Off-street Parking</option>
                        <option value={1}>On-street Parking</option>
                        <option value={2}>No Parking</option>
                        </Select>
                    </FormControl>
                    <p>INTERNET</p>
                    <FormControl 
                        variant="outlined" 
                        margin="normal"
                        fullWidth
                    >
                        <InputLabel ref={inputLabel} htmlFor="internet">
                            Select one
                        </InputLabel>
                        <Select
                            native
                            value={state.adress}
                            onChange={handleChange('internet')}
                            input={
                                <OutlinedInput name="internet" labelWidth={labelWidth} id="internet" />
                            }
                        >
                        <option value="" />
                        <option value={0}>No Internet</option>
                        <option value={1}>Available but not included in rent</option>
                        <option value={2}>Available with rent</option>
                        <option value={3}>Unlimited included in rent</option>
                        </Select>
                    </FormControl>
                    <BrowserRouter>
                        <Button variant="contained" color="secondary" href={'../Listing2'}>Continue</Button>
                        <Route path="/Listing2" component={() => <Listing2/>}/>
                    </BrowserRouter>
                </Container>
            </Container>
        </React.Fragment>
    );
}
 
export default Listing9;


