import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import {CardContent,Divider,Grid,Avatar,Card} from "@material-ui/core";
import Box from '@material-ui/core/Box';
import {CssTextField} from "./Textinputs";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Home";

function Listing8 () {
    const [values, setValue] = React.useState({
        preferences: '',
    });

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleChange = name => event => {
        setValue({
            ...values,
            [name]: event.target.value,
        });
    };
    return (
        <React.Fragment>
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
                          <CssTextField 
                            id="description"
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
                            value={values.preferences}
                            onChange={handleChange('preferences')}
                            input={
                                <OutlinedInput name="preferences" labelWidth={labelWidth} id="preferences" />
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
                    <BrowserRouter>
                        <Button variant="contained" color="secondary" href={'../'}>Finish</Button>
                    </BrowserRouter>
                </Container>
            </Container>
        </React.Fragment>
    );
}
 
export default Listing8;
