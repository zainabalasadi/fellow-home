import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import {CardContent,Divider,Grid,Avatar,Card} from "@material-ui/core";
import {CssTextField} from "./Textinputs";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

function Help () {

    return (
        <Container style={{height:'100vh',backgroundColor: 'white', textAlign:'center'}} maxWidth="xl">
            <Container style={{padding: 20, textAlign:'left'}} maxWidth="md">
            <h4>Help</h4>
            <h6>How do I create an account?</h6>
            On the top right corner there's a 'Sign Up' button where you can enter your details to have an account created.
            <h6>How do I log in?</h6>
            On the top right corner there's a 'Log In' button where you can enter your email and password.
            <h6>How do I contact the homeowner?</h6>
            Click on their listing page and on the right side of the page there is an option to contact the owner.
            </Container>
        </Container>
    );
}
 
export default Help;
