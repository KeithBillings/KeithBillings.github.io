import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ProfilePhoto from '../images/me2.jpg';
import HeroCarousel from './HeroCarousel';

const useStyles = makeStyles({
  header: {
    marginTop: '10vh',
    borderBottom: '1px lightgray solid',
  },
  headerName: {
    fontFamily: 'Playfair Display',
    letterSpacing: '3px',
    transition: '0.5s',
    '&:hover': {
      color: 'lightblue',
    },
  },
  profilePhotoWrapper: {
    padding: '1rem',
    flexBasis: '30%',
  },
  profilePhoto: {
    borderRadius: '50%',
    width: '200px',
    height: '200px',
    border: '2px lightgray solid',
    padding: '5px',
    backgroundImage: `url(${ProfilePhoto})`,
    backgroundSize: '100%',
    backgroundPosition: 'center',
    transition: '0.5s ease-in-out',
    '&:hover': {
      backgroundSize: '105%',
    },
  },
  headerMainTextArea: {
    paddingTop: '2rem',
    '& *': {
      marginTop: '5px',
    },
  },
  contactIcons: {
    marginRight: '5px',
  },
  contactText: {
    fontFamily: 'inherit',
    letterSpacing: '1px',
    transition: '0.5s',
    '&:hover': {
      color: 'lightblue',
    },
  },
  carouselWrapper: {
    margin: '1rem ',
    transition: '1s',
  },
});

export default function Header() {
  const classes = useStyles();

  return (
    <Grid container className={classes.header} justify='center'>
      <Grid item className={classes.profilePhotoWrapper}>
        <div className={classes.profilePhoto} />
      </Grid>
      <Grid item className={classes.headerMainTextArea}>
        <Typography variant='h4' className={classes.headerName}>
          Keith Billings
        </Typography>
        <Typography variant='subtitle1'>FULL STACK DEVELOPER</Typography>
        <Typography className={classes.contactText}>
          <a href='mailto:keithbillingsbusiness@gmail.com'>
            <MailOutlineIcon fontSize={'small'} className={classes.contactIcons} />
            keithbillingsbusiness@gmail.com
          </a>
        </Typography>
        <Typography className={classes.contactText}>
          <a href='https://github.com/KeithBillings'>
            <GitHubIcon fontSize={'small'} className={classes.contactIcons} />
            github.com/KeithBillings
          </a>
        </Typography>
        <Typography className={classes.contactText}>
          <a href='https://www.linkedin.com/in/keithbillings/'>
            <LinkedInIcon fontSize={'small'} className={classes.contactIcons} />
            linkedin.com/in/keithbillings
          </a>
        </Typography>
      </Grid>
      <Grid container justify='center' className={classes.carouselWrapper} data-aos='zoom-in'>
        <Grid item>
          <HeroCarousel />
        </Grid>
      </Grid>
    </Grid>
  );
}
