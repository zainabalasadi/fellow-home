import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import {CardContent,Divider,Grid,Avatar,Card} from "@material-ui/core";
import Box from '@material-ui/core/Box';
import {CssTextField} from "./Textinputs";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Listing6 from "./Listing6";

function Listing5 () {
    const [values, setValue] = React.useState({
        amount: '',
        bond: '',
        bills: '',
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
                                <Box 
                                    color="black" 
                                    bgcolor="white" 
                                    borderBottom={4} 
                                    borderColor="tomato" 
                                    p={0}
                                    style={{height: '2rem'}}
                                >
                                    Rent
                                </Box>
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
                    <h4>Price your property</h4>
                    <p>Room with a view</p>
                    <p>WEEKLY RENT</p>
                    <CssTextField
                        id="amount"
                        variant="outlined"
                        label="Amount"
                        value={values.amount}
                        onChange={handleChange('amount')}
                        InputProps={{
                          startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                    />
                    <p>BOND</p>
                    <FormControl 
                        variant="outlined" 
                        margin="normal"
                        fullWidth
                    >
                        <InputLabel ref={inputLabel} htmlFor="bond">
                            Select one
                        </InputLabel>
                        <Select
                            native
                            value={values.bond}
                            onChange={handleChange('bond')}
                            input={
                                <OutlinedInput name="bond" labelWidth={labelWidth} id="bond" />
                            }
                        >
                        <option value="" />
                        <option value={0}>None</option>
                        <option value={1}>1 week</option>
                        <option value={2}>2 weeks</option>
                        <option value={3}>3 weeks</option>
                        <option value={4}>4 weeks</option>
                        </Select>
                    </FormControl>
                    <p>BILLS</p>
                    <FormControl 
                        variant="outlined" 
                        margin="normal"
                        fullWidth
                    >
                        <InputLabel ref={inputLabel} htmlFor="bills">
                            Select one
                        </InputLabel>
                        <Select
                            native
                            value={values.bills}
                            onChange={handleChange('bills')}
                            input={
                                <OutlinedInput name="bills" labelWidth={labelWidth} id="bills" />
                            }
                        >
                        <option value="" />
                        <option value={0}>Not included in rent</option>
                        <option value={1}>Some included in rent</option>
                        <option value={2}>Available with rent</option>
                        <option value={3}>Included in rent</option>
                        </Select>
                    </FormControl>
                    <BrowserRouter>
                        <Button variant="contained" color="secondary" href={'../Listing6'}>Continue</Button>
                        <Route path="/Listing6" component={() => <Listing6/>}/>
                    </BrowserRouter>
                </Container>
            </Container>
        </React.Fragment>
    );
}
 
export default Listing5;
