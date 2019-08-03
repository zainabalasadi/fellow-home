import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import GridListing from "./GridListing";

function Saved () {
	return (
		<Container maxWidth="lg" style={{position:'relative', top:'100px', height:'100vh'}}>
            <h5>Saved Listings</h5>
            <GridListing />
        </Container>
    )
}

export default Saved