/**
 * Listing call to action (CTA)component
 * Written by: Zainab Alasadi
 */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Container, Grid} from '@material-ui/core/Container'
import Image from '../assets/images/list_cube.jpg'
import * as Buttons from './Button'

/**
 * Styles for listing CTA
 */
const useStyles = makeStyles(theme => ({
   container: {
      paddingTop: '50px',
      paddingBottom: '50px',
      borderRadius: '10px',
      backgroundImage: `url(${Image})`,
      height: '330px',
      backgroundSize: 'cover',
      color: '#484848',
   },

   padding: {
      paddingBottom: '100px',
   },

   button: {
      background: '#FF5240',
      height: '40px',
   }
}));

/**
 * Method for rendering listing cta component
 * @param {*} props 
 */
export default function ListingCTA(props) {
   const classes = useStyles();

   return (
      <div>
         <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={4} justify="space-evenly">
               <Grid item xs={6} sm={5}>
                  <h4 className={classes.padding}>Earn up to $2,610 AUD/month by sharing your home in NSW</h4>
                  <Buttons.ButtonFill className={classes.button} href={'../Listing9'} message={"List my spot"}/>
               </Grid>
               <Grid item xs={6} sm={3}></Grid>
               <Grid item xs={6} sm={3}></Grid>
               <Grid item xs={6} sm={3}></Grid>
            </Grid>
         </Container>
      </div>
   );
}