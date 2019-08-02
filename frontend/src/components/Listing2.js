import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import {CardContent,Divider,Grid,Avatar,Card} from "@material-ui/core";
import Box from '@material-ui/core/Box';
import {CssTextField} from "./Textinputs";
import * as Buttons from './Button';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Listing3 from "./Listing3";

function Listing2 (props) {
    const [values, setValues] = React.useState({
        housemates: 0,
        vacancies: 0,
    });

    const handleChange = name => event => {
        setValues({
            ...values,
            [name]: event.target.value,
        });
    };
    const handleNumChange = name => event => {
        let val=event.target.value;
        if (parseInt(val)>=0) {
            setValues({
                ...values,
                [name]: event.target.value,
            });
        }
    };
    function handlePlus(name){
        let val = document.getElementById(name).value;

        setValues({
            ...values,
            [name]: parseInt(val)+1,
        });

    }
    function handleMinus(name){
        let val = document.getElementById(name).value;
        if (parseInt(val)>0){
            setValues({
                ...values,
                [name]: parseInt(val)-1,
            });
        }
    }
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
            <Container style={{position:'relative',left:'-170px',textAlign:'left', padding:10}} maxWidth="sm">
                <Box fontSize={24}>
                    Tell us more about who lives in the property?
                </Box>
                <Box fontSize={10} fontWeight="fontWeightBold" mt={3}>
                    Current number of housemates
                </Box>
                {parseInt(values.housemates) === 0
                    ? <Buttons.ButtonMinus disabled={true}/>
                    : <Buttons.ButtonMinus click={() => handleMinus('housemates')}/>
                }
                <CssTextField
                    id="housemates"
                    value={values.housemates}
                    onChange={handleNumChange('housemates')}
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="dense"
                    variant="outlined"
                />
                <Buttons.ButtonPlus click={()=>handlePlus('housemates')}/>
                <Box fontSize={10} fontWeight="fontWeightBold" mt={2}>
                    Number of Vacancies
                </Box>
                {parseInt(values.vacancies) === 0
                    ? <Buttons.ButtonMinus disabled={true}/>
                    : <Buttons.ButtonMinus click={() => handleMinus('vacancies')}/>
                }
                <CssTextField
                    id="vacancies"
                    value={values.vacancies}
                    onChange={handleNumChange('vacancies')}
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="dense"
                    variant="outlined"
                />
                <Buttons.ButtonPlus click={()=>handlePlus('vacancies')}/>
                <p/>
                <BrowserRouter>
                    <Buttons.ButtonFill color={props.color.primary} href={'../Listing3'} message={"Continue"}/>
                </BrowserRouter>
            </Container>
        </Container>
    );
}
 
export default Listing2;
