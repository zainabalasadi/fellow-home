import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import {CardContent,Divider,Grid,Avatar,Card} from "@material-ui/core";
import Box from '@material-ui/core/Box';
import {CssTextField} from "./Textinputs";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import * as Buttons from './Button';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Listing7 from "./Listing7";

function Listing6 (props) {
    const [values, setValue] = React.useState({
        minStay: '',
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
            <Container style={{position:'relative',left:'-170px',textAlign:'left', padding:10}} maxWidth="sm">
                <Box fontSize={24}>
                    When is your property available?
                </Box>
                <Box fontSize={10} fontWeight="fontWeightBold" mt={3} mb={1}>
                    DATE AVAILABLE FROM
                </Box>
                <CssTextField
                    id="date"
                    type="date"
                    placeholder="YYYY-MM-DD"
                    style={{width:'85px'}}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Box fontSize={10} fontWeight="fontWeightBold" mt={3} mb={0}>
                    MINIMUM LENGTH OF STAY
                </Box>
                <FormControl 
                    variant="outlined" 
                    margin="normal"
                    fullWidth
                >
                    <InputLabel ref={inputLabel} htmlFor="minStay">
                        Select one
                    </InputLabel>
                    <Select
                        native
                        value={values.minStay}

                        onChange={handleChange('minStay')}
                        input={
                            <OutlinedInput name="minStay" labelWidth={labelWidth} id="minStay" />
                        }
                    >
                    <option value="" />
                    <option value={0}>1 Month</option>
                    <option value={1}>2 Months</option>
                    <option value={2}>3 Months</option>
                    <option value={3}>4 Months</option>
                    <option value={4}>5 Months</option>
                    <option value={5}>6 Months</option>
                    <option value={6}>1 Year</option>
                    </Select>
                </FormControl>
                <p/>
                <BrowserRouter>
                    <Buttons.ButtonFill color={props.color.primary} href={'../Listing7'} message={"Continue"}/>
                </BrowserRouter>
            </Container>
        </Container>
    );
}
 
export default Listing6;
