import React from 'react'
import Grid from '@material-ui/core/Grid'
import ListingCard from "../components/ListingThumbnail"

export default function GridListing(props) {
   return (
       <div>
            <Grid container spacing={3}>
               <Grid item md={3}>
                  <ListingCard abstract={"This impressive paella is a perfect party dish and a fun meal to cook together with your\n" +
                                        "                    guests. Add 1 cup of frozen peas along with the mussels, if you like."}/>
               </Grid>
               <Grid item md={3}>
                  <ListingCard abstract={"This impressive paella is a perfect party dish and a fun meal to cook together with your\n" +
                                        "                    guests. Add 1 cup of frozen peas along with the mussels, if you like."}/>
               </Grid>
               <Grid item md={3}>
                  <ListingCard abstract={"This impressive paella is a perfect party dish and a fun meal to cook together with your\n" +
                                        "                    guests. Add 1 cup of frozen peas along with the mussels, if you like."}/>
               </Grid>
               <Grid item md={3}>
                  <ListingCard abstract={"This impressive paella is a perfect party dish and a fun meal to cook together with your\n" +
                                        "                    guests. Add 1 cup of frozen peas along with the mussels, if you like."}/>
               </Grid>
            </Grid> 
       </div>
   );
}