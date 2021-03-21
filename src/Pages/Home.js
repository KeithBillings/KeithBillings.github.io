import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Header from '../components/Header';
import HomeBody from '../components/HomeBody';

const useStyles = makeStyles({
  home: {
    margin: 'auto',
  },
});

export default function Home() {
  const classes = useStyles();

  return (
    <Container className={classes.home}>
      <Header />
      <HomeBody />
    </Container>
  );
}
