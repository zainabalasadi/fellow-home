/**
 * Saved searches component
 * Written by: Zainab Alasadi
 */
import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'

/**
 * Styles for saved search
 */
const useStyles = makeStyles({
   button: {
      height: '120px',
      width: '28%',
      backgroundColor: '#EEEEEE',
      paddingLeft: '30px',
      color: '#484848',
      borderRadius: '4px',
   },
   headingPadding: {
      paddingTop: '20px',
      marginBottom: '5px',
   },
   grid: {
      marginTop: '0px',
   }
});

/**
 * Render saved search component ui
 */
export default function SavedSearch() {
  const classes = useStyles();

  return (
      <div className={classes.button}>
         <Grid className={classes.grid} spacing={4} justify="space-evenly">
               <Grid item xs={6} sm={5}>
                     <h6 className={classes.headingPadding}>Kensington, NSW</h6>
                     <p>Private Rooms</p>
               </Grid>
               <Grid item xs={6} sm={3}>Continue</Grid>
         </Grid>
      </div>
   )
}