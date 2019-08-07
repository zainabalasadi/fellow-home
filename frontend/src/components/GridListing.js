import React, { Component } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import ListingCard from "../components/ListingThumbnail"

const GridListing = (props) => {
    const [listings, setListings] = React.useState([]);

    React.useEffect(() => {
        getListings();
    }, []);

    const getListings = () => {
        axios.get('http://localhost:5000/api/listings')
            .then((res) => {
                console.log(res);
                setListings(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
        <Grid container spacing={3}>
        {
            listings.map((listing, i) => (
                <Grid item md={3}>
                <ListingCard
                details={listing}
                />
                </Grid>
            ))
        }
        </Grid> 
        </div>
    );
}
export default GridListing;
