import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import {CardContent,Divider,Grid,Avatar,Card} from "@material-ui/core";
import {CssTextField} from "./Textinputs";

function About () {

    return (
        <Container style={{height:'100vh',backgroundColor: 'white', textAlign:'center'}} maxWidth="xl">
            <Container style={{padding: 20}} maxWidth="md">
            <h4>About Fellow</h4>
            <h6>A peer-to-peer accommodation web portal that connects students to potential housemates in NSW</h6>
            <p>
            We are an indpendent organisation whose key objectives are to provide cheaper alternatives to
            accomodation while providing a platform for students to connect to homeowners with unused rooms.
            We hope to pave the way for affordable student accomodation in an effort to create s strong
            sense of community and safety.
            </p>
            </Container>
        </Container>
    );
}
 
export default About;
