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
import Listing4 from "./Listing4";

function Listing3 (props) {
    const [values, setValue] = React.useState({
        roomType: '',
        bathroomAccess: '',
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
                            <Box 
                                color="black" 
                                bgcolor="white" 
                                borderBottom={4} 
                                borderColor="tomato" 
                                p={0}
                                style={{height: '2rem'}}
                            >
                                Room
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
            <Container style={{position:'relative',left:'-170px',textAlign:'left', padding:10}} maxWidth="sm">
                <Box fontSize={24}>
                    Tell us about the rooms available
                </Box>
                <Box fontSize={10} fontWeight="fontWeightBold" mt={3}>
                    ROOM NAME
                </Box>
                <CssTextField
                    id="room1"
                    placeholder="Room 1"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    fullWidth
                />
                <Box fontSize={10} fontWeight="fontWeightBold" mt={2}>
                    ROOM TYPE
                </Box>
                <FormControl 
                    variant="outlined" 
                    margin="normal"
                    fullWidth
                >
                    <InputLabel ref={inputLabel} htmlFor="roomType">
                        Select one
                    </InputLabel>
                    <Select
                        native
                        value={values.roomType}
                        onChange={handleChange('roomType')}
                        input={
                            <OutlinedInput name="roomType" labelWidth={labelWidth} id="roomType" />
                        }
                    >
                    <option value="" />
                    <option value={0}>Small</option>
                    <option value={1}>Medium</option>
                    <option value={2}>Large</option>
                    </Select>
                </FormControl>
                <Box fontSize={10} fontWeight="fontWeightBold" mt={2}>
                    BATHROOM ACCESS
                </Box>
                <FormControl 
                    variant="outlined" 
                    margin="normal"
                    fullWidth
                >
                    <InputLabel ref={inputLabel} htmlFor="bathroomAccess">
                        Select one
                    </InputLabel>
                    <Select
                        native
                        value={values.bathroomAccess}
                        onChange={handleChange('bathroomAccess')}
                        input={
                            <OutlinedInput name="bathroomAccess" labelWidth={labelWidth} id="bathroomAccess" />
                        }
                    >
                    <option value="" />
                    <option value={0}>Yes</option>
                    <option value={1}>No</option>
                    </Select>
                </FormControl>
                + add another room
                <p/>
                <BrowserRouter>
                    <Buttons.ButtonFill color={props.color.primary} href={'../Listing4'} message={"Continue"}/>
                </BrowserRouter>
            </Container>
        </Container>
    );
}
 
export default Listing3;
