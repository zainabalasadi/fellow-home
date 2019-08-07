import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {theme} from './Theme';

function MadeWithLove() {
  return (
    <Typography variant="body2" color="#ffffff">
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
  main: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2),
  },
  footer: {
      padding: theme.spacing(2),
      marginTop: 'auto',
      backgroundColor: '#484848',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Typography variant="body1">My sticky footer can be found here.</Typography>
          <MadeWithLove />
        </Container>
      </footer>
  );
}