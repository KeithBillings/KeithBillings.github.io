import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  blogsWrapper: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  linkedInArticle: {
    margin: '1rem auto 1rem auto',
  },
  '@media only screen and (max-width: 770px)': {
    linkedInArticle: {
      minHeight: '80vh',
    },
  },
  '@media only screen and (min-width: 600px)': {
    linkedInArticle: {
      width: '60%',
      minHeight: '50vh',
    },
  },
});

export default function Blogs() {
  const classes = useStyles();

  return (
    <Grid container justify={'center'}>
      <Grid item sm={12} className={classes.blogsWrapper}>
        <iframe
          src='https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6778506987257892864'
          className={classes.linkedInArticle}
          height='435'
          frameBorder='0'
          allowFullScreen=''
          title='Embedded post'
        ></iframe>
      </Grid>
      <Grid item sm={12} className={classes.blogsWrapper}>
        <iframe
          src='https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6755558746317053952'
          className={classes.linkedInArticle}
          height='462'
          frameBorder='0'
          allowFullScreen=''
          title='Embedded post'
        ></iframe>
      </Grid>
    </Grid>
  );
}
