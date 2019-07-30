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
import Listing7 from "./Listing7";

function Listing6 () {
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
                                Type of accomodation
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
                                <Box 
                                    color="black" 
                                    bgcolor="white" 
                                    borderBottom={4} 
                                    borderColor="tomato" 
                                    p={0}
                                    style={{height: '2rem'}}
                                >
                                    Availabilities
                                </Box>
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
                    <h4>When is your property available?</h4>
                    <p>Room with a view</p>
                    <TextField
                        id="date"
                        label="Date available from"
                        type="date"
                        placeholder="YYYY-MM-DD"
                        InputLabelProps={{
                          shrink: true,
                        }}
                    />
                    <p>minimum length stay</p>
                    <FormControl 
                        variant="outlined" 
                        margin="normal"
                        fullWidth
                    >
                        <InputLabel ref={inputLabel} htmlFor="minstay">
                            Select one
                        </InputLabel>
                            
                        <Select
                            native
                            value={state.minstay}

                            onChange={handleChange('minstay')}
                            input={
                                <OutlinedInput name="minstay" labelWidth={labelWidth} id="minstay" />
                            }
                        >

                        <option value="" />
                        <option value={0}>1 Month</option>
                        <option value={1}>2 Months</option>
                        <option value={2}>3 Months</option>
                        <option value={2}>4 Months</option>
                        <option value={2}>5 Months</option>
                        <option value={2}>6 Months</option>
                        <option value={2}>1 Year</option>
                        </Select>
                    </FormControl>
                    <BrowserRouter>
                        <Button variant="contained" color="secondary" href={'../Listing7'}>Continue</Button>
                        <Route path="/Listing7" component={() => <Listing7/>}/>
                    </BrowserRouter>
                </Container>
            </Container>
        </React.Fragment>
    );
}
 
export default Listing6;

