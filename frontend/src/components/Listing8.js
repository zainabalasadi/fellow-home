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


function Listing8 () {
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
                                Availabilities
                            </Grid>
                            <Grid item xs>
                                Photos
                            </Grid>
                            <Grid item xs = {2}>
                                <Box 
                                    color="black" 
                                    bgcolor="white" 
                                    borderBottom={4} 
                                    borderColor="tomato" 
                                    p={0}
                                    style={{height: '2rem'}}
                                >
                                    Preferences and About
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
                <Container style={{position: 'absolute', left: 265,textAlign:'left', padding:10}} maxWidth="sm">
                    <h4>Describe your property</h4>
                    <p>Description</p>
                          <TextField
                            
                            id="outlined-multiline-static"
                            placeholder="Describe the housemates location, atmosphere, etc."
                            multiline
                            rows="4"
                            margin="normal"
                            variant="outlined"
                            fullWidth
                          />
                    <p>Housemate Preferences</p>
                    <FormControl 
                        
                        variant="outlined" 
                        margin="normal"
                        fullWidth
                    >
                        <InputLabel ref={inputLabel} htmlFor="pref">
                            Select one
                        </InputLabel>
                            
                        <Select
                            native
                            value={state.pref}

                            onChange={handleChange('pref')}
                            input={
                                <OutlinedInput name="pref" labelWidth={labelWidth} id="pref" />
                            }
                        >

                        <option value="" />
                        <option value={0}>No Preferences</option>
                        <option value={1}>Female Only</option>
                        <option value={2}>Male Only</option>
                        <option value={2}>Couples</option>
                        <option value={2}>No Couples</option>
                        <option value={2}>Under 30 years of Age</option>
                        </Select>
                    </FormControl>
                </Container>
            </Container>
        </React.Fragment>
    );
}
 
export default Listing8;

