import React from 'react'
import Grid from '@material-ui/core/Grid'
import ListingCard from "../components/ListingThumbnail"

const GridListing = (props) => {
    return (
        <div>
        <Grid container spacing={3}>
        {
            props.listings.map((listing, i) => (
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
