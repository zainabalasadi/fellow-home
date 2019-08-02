import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import {CardContent,Divider,Grid,Avatar,Card} from "@material-ui/core";
import Box from '@material-ui/core/Box';
import * as Buttons from './Button';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Listing8 from "./Listing8";

class Listing7 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            file: null
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    }

    render(){
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
                                Availabilities
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
                                    Photos
                                </Box>
                            </Grid>
                            <Grid item xs = {2}>
                                Preferences and About
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
                <Container style={{position:'relative',left:'-170px',textAlign:'left', padding:10}} maxWidth="sm">
                    <Box fontSize={24}>
                        Add photos to your listing
                    </Box>
                    <Box fontSize={10} fontWeight="fontWeightBold" mt={3} mb={0}>
                        Photos
                    </Box>
                    <input
                        accept="image/*"
                        id="contained-button-file"
                        multiple
                        type="file" onChange={this.handleChange}
                        style={{display:'none'}}
                    />
                    <p/>
                    <label htmlFor="contained-button-file">
                        <Buttons.ButtonFill color={this.props.color.dark} disabled={true} classNames={{component: "span"}} message={"Upload"}/>
                    </label>
                    <img src={this.state.file}/>
                    <p/>
                    <BrowserRouter>
                        <Buttons.ButtonFill color={this.props.color.primary} href={'../Listing8'} message={"Continue"}/>
                    </BrowserRouter>
                </Container>
            </Container>
        );
    }
}
 
export default Listing7;
