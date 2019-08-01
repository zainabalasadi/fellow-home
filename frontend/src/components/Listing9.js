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
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Listing2 from "./Listing2";

function Listing9 () {
    const [values, setValues] = React.useState({
        bedroom: '',
        bathroom: '',
        parking: '',
        internet: '',
    });

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

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
            <Container style={{position:'relative',left:'-170px',textAlign:'left', padding:10}} maxWidth="sm">
                <Box fontSize={24}>
                    Tell us more about the property
                    <Box fontSize={10} fontWeight="fontWeightBold" mt={3}>
                        Total number of bedrooms
                    </Box>
                    <CssTextField
                        id="bedroom"
                        value={values.bedroom}
                        onChange={handleChange('bedroom')}
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="dense"
                        variant="outlined"
                    />
                    <Box fontSize={10} fontWeight="fontWeightBold" mt={2}>
                        Total number of bathrooms
                    </Box>
                    <CssTextField
                        id="bathroom"
                        value={values.bathroom}
                        onChange={handleChange('bathroom')}
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="dense"
                        variant="outlined"
                    />
                    <Box fontSize={10} fontWeight="fontWeightBold"mt={2}>
                        PARKING
                    </Box>
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
                            value={values.parking}
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
                    <Box fontSize={10} fontWeight="fontWeightBold"mt={2}>
                        INTERNET
                    </Box>
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
                            value={values.internet}
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
                </Box>
                <p/>
                <BrowserRouter>
                    <Button variant="contained" color="secondary" href={'../Listing2'}>Continue</Button>
                    <Route path="/Listing2" component={() => <Listing2/>}/>
                </BrowserRouter>
            </Container>
        </Container>
    );
}
 
export default Listing9;
