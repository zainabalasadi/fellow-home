import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Image from '../assets/images/list_cube.jpg';
import * as Buttons from './Button';

const useStyles = makeStyles(theme => ({
  container: {
      paddingTop: '50px',
      paddingBottom: '50px',
      backgroundColor: 'black',
      borderRadius: '10px',
      backgroundImage: `url(${Image})`,
      height: '330px',
      backgroundSize: 'cover',
      color: '#484848',
   },
   padding: {
      paddingBottom: '100px',
   }
}));

export default function ListingCTA(props) {
  const classes = useStyles();

  return (
      <div>
        <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={4} justify="space-evenly">
               <Grid item xs={6} sm={5}>
                  <h4 className={classes.padding}>Earn up to $2,610 AUD/month by sharing your home in NSW</h4>
                  <Buttons.ButtonFill /*color={props.color.primary}*/ href={'../Listing9'} message={"Continue"}/>
               </Grid>
               <Grid item xs={6} sm={3}></Grid>
               <Grid item xs={6} sm={3}></Grid>
               <Grid item xs={6} sm={3}></Grid>
            </Grid>
        </Container>
      </div>
  );
}