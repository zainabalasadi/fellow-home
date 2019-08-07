import React from 'react'
import Grid from '@material-ui/core/Grid'
import ListingCard from "../components/ListingThumbnail"

export default function GridListing(props) {
   return (
       <div>
            <Grid container spacing={3}>
               <Grid item md={3}>
                  <ListingCard
                  details={{
                     roomType: "Private Room",
                     suburb: "Chatswood",
                     title: "Private room with a view",
                     price: 175
                  }}
                  />
               </Grid>
               <Grid item md={3}>
                  <ListingCard
                  details={{
                     roomType: "Private Room",
                     suburb: "Chatswood",
                     title: "Private room with a view",
                     price: 175
                  }}
                  />
               </Grid>
               <Grid item md={3}>
                  <ListingCard
                  details={{
                     roomType: "Private Room",
                     suburb: "Chatswood",
                     title: "Private room with a view",
                     price: 175
                  }}
                  />
               </Grid>
               <Grid item md={3}>
                  <ListingCard
                  details={{
                     roomType: "Private Room",
                     suburb: "Chatswood",
                     title: "Private room with a view",
                     price: 175
                  }}
                  />
               </Grid>
            </Grid> 
       </div>
   );
}