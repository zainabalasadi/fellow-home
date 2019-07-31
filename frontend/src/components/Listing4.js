import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import {CardContent,Divider,Grid,Avatar,Card} from "@material-ui/core";
import Box from '@material-ui/core/Box';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Check from "./Check";
import config from "../utils/config";
import Listing5 from "./Listing5";

function Listing4 () {
    const [values, setValue] = React.useState({
        bedType: '',
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
                                <Box 
                                    color="black" 
                                    bgcolor="white" 
                                    borderBottom={4} 
                                    borderColor="tomato" 
                                    p={0}
                                    style={{height: '2rem'}}
                                >
                                    Features
                                </Box>
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
                    <h4>What ammenities do the rooms offer?</h4>
                    <p>Room with a view</p>
                    <p>BED TYPE</p>
                    <FormControl 
                        variant="outlined" 
                        margin="normal"
                        fullWidth
                    >
                        <InputLabel ref={inputLabel} htmlFor="bedType">
                            Select one
                        </InputLabel>
                        <Select
                            native
                            value={values.bedType}
                            onChange={handleChange('bedType')}
                            input={
                                <OutlinedInput name="bedType" labelWidth={labelWidth} id="bedType" />
                            }
                        >
                        <option value="" />
                        <option value={0}>Single</option>
                        <option value={1}>Double</option>
                        <option value={2}>Queen</option>
                        <option value={3}>King</option>
                        <option value={4}>None</option>
                        </Select>
                    </FormControl>
                    <p>Amenities</p>
                    <p>These are just the amentiies housemates usually expect, but you can add even more after you publish</p>
                    <div>
                        <Check features={config.checkAmenities}/>
                    </div>
                    <BrowserRouter>
                        <Button variant="contained" color="secondary" href={'../Listing5'}>Continue</Button>
                        <Route path="/Listing5" component={() => <Listing5/>}/>
                    </BrowserRouter>
                </Container>
            </Container>
        </React.Fragment>
    );
}
 
export default Listing4;
