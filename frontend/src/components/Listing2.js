import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import {CardContent,Divider,Grid,Avatar,Card} from "@material-ui/core";
import Box from '@material-ui/core/Box';
import {CssTextField} from "./Textinputs";
import Button from '@material-ui/core/Button';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Listing3 from "./Listing3";

function Listing2 () {
    const [values, setValues] = React.useState({
        housemates: '',
        vancancies: '',
    });

    const handleChange = name => event => {
        setValues({ 
            ...values, 
            [name]: event.target.value, 
        });
    };

    return (
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
                            <Box 
                                color="black" 
                                bgcolor="white" 
                                borderBottom={4} 
                                borderColor="tomato" 
                                p={0}
                                style={{height: '2rem'}}
                            >
                                Housemates
                            </Box>
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
            <Container style={{position:'relative',left:'-170px',textAlign:'left', padding:10}} maxWidth="sm"><h4>Tell us more about who lives in the property?</h4>
                <p>Current number of housemates</p>
                <CssTextField
                    id="housemates"
                    value={values.housemates}
                    onChange={handleChange('housemates')}
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="dense"
                    variant="outlined"
                />
                <p>Number of Vacancies</p>
                <CssTextField
                    id="vacancies"
                    value={values.vacancies}
                    onChange={handleChange('vacancies')}
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="dense"
                    variant="outlined"
                />
                <BrowserRouter>
                    <Button variant="contained" color="secondary" href={'../Listing3'}>Continue</Button>
                    <Route path="/Listing3" component={() => <Listing3/>}/>
                </BrowserRouter>
            </Container>
        </Container>
    );
}
 
export default Listing2;
