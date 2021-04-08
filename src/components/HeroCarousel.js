import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';

const useStyles = makeStyles({
  carouselText: {
    fontFamily: 'inherit',
    letterSpacing: '1px',
    textAlign: 'center',
    width: '55%',
    margin: 'auto',
  },
  a: {
    transition: '0.5s',
    '&:hover': {
      color: 'lightblue',
    },
  },
  carouselButtons: {
    opacity: '0',
  },
  '@media only screen and (min-width: 600px)': {
    GitHubCalendar: {
      margin: '0 10vw',
    },
  },
});

export default function HeroCarousel() {
  const classes = useStyles();

  return (
    <Carousel fullHeightHover={true} navButtonsAlwaysVisible={false} interval={15000} navButtonsProps={{ className: classes.carouselButtons }}>
      <Typography className={classes.carouselText}>
        Hello World! 👋 I am a web developer who specializes in React. I love to create, and I am always learning and improving! My interests include cars, NBA,
        and investing. My hobbies include traveling, photography, working out, and gaming.
        <br />
        PDX Native.{' '}
        <a href='https://www.instagram.com/explore/tags/ripcity/' className={classes.a}>
          <strong>#ripcity</strong>
        </a>
      </Typography>
      <div className={classes.GitHubCalendar}>
        <GitHubCalendar username='KeithBillings' color={'hsl(203, 82%, 33%)'}>
          <ReactTooltip delayShow={50} html />
        </GitHubCalendar>
      </div>
      <Typography className={classes.carouselText}>
        <strong>I know: </strong>
        React, Next.js, MongoDB, CSS and SCSS, HTML, Javascript, Typescript, Node.js, Material-UI, Bootstrap, and Express. <br />
        <strong>Learning: </strong>
        Redux.js, GraphQL
      </Typography>
    </Carousel>
  );
}
