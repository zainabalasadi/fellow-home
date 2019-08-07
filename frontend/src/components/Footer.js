import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {theme} from './Theme';
import Grid from '@material-ui/core/Grid';

function MadeWithLove() {
  return (
    <Typography variant="subtitle">
      {'Built with love by Team Home.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
  },
  footer: {
      padding: theme.spacing(2),
      marginTop: 'auto',
      backgroundColor: '#484848',
      color: "white",
  },

  container: {
      paddingTop: '50px',
      paddingBottom: '50px',
   },
   logo: {
      width: '120px',
   },
   caption: {
      fontWeight: 'bold',
      fontSize: '15px',
      paddingBottom: '30px',
   }
}));

export default function Footer() {
  const classes = useStyles();

  return (
      <footer className={classes.footer}>
        <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={4} justify="space-evenly">
               <Grid item xs={6} sm={6}>
               <img className={classes.logo} src={require("../assets/images/logo.svg")}/>
               <Typography className={classes.caption} variant="body1">Flatmates.com.au is a peer to peer listing site for those looking for shared homes or those looking for a flatmate. Simply create a listing, search and connect.</Typography>
               </Grid>
               <Grid item xs={6} sm={3}></Grid>
               <Grid item xs={6} sm={3}></Grid>
               <Grid item xs={6} sm={3}></Grid>
            </Grid>
            <Typography variant="body1">Fellow.com.au is owned and operated by ASX-listed REA Group Ltd (REA:ASX) © REA Group Ltd.</Typography>
            <MadeWithLove />
        </Container>
      </footer>

      // <Container maxWidth="lg">
      //    <Grid container spacing={4} justify="space-evenly">
      //       <Grid item xs={6} sm={3}>
      //          <ul>
      //             <li>Hello</li>
      //             <li>Hello</li>
      //             <li>Hello</li>
      //             <li>Hello</li>
      //          </ul>
      //       </Grid>

      //    </Grid>
      // </Container>
  );
}

