import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  aboutMeWrapper: {
    margin: '10vh auto auto auto',
  },
  title: {
    fontFamily: 'Playfair Display',
    textAlign: 'center',
    borderBottom: '1px black solid',
    paddingBottom: '1rem',
  },
  bodyText: {
    fontFamily: 'inherit',
    textAlign: 'justify',
    padding: '1rem',
  },
  profilePhoto: {
    display: 'block',
    margin: '5vh auto',
    height: '400px',
    boxShadow: '0px 0px 10px 0px #e6bba8',
  },
  link: {
    fontFamily: 'Playfair Display',
    transition: '0.5s',
    '&:hover': {
      color: 'lightblue',
    },
  },
});

export default function AboutMe() {
  const classes = useStyles();

  return (
    <Container className={classes.aboutMeWrapper}>
      <Typography variant='h3' className={classes.title} gutterBottom={true}>
        About Me
      </Typography>
      <Container>
        <Typography className={classes.bodyText}>
          Growing up, I always had a passion for technology and had a great attention to detail. My family taught me that hard work and determination pays off,
          and I have kept that to heart ever since. I was a volunteer firefighter which taught me teamwork, communication, and improved my problem solving.
        </Typography>
        <Typography className={classes.bodyText}>
          From there I became a maintenance engineer, where I learned independence, version control, and how to network. Along my journeys, I received
          promotions, and pay raises, but it never satisfied my passion.
        </Typography>
        <Typography className={classes.bodyText}>
          When COVID hit, my place of business shut down, and instead of sitting around or panicking, I immediately went back to school, and learned full stack
          web development. I followed my passion. Because I love what I do so much, I learn it so much faster. Coding, web development, designing, all speak to
          me. They fulfill my desire to problem solve and to be creative. However, doing a career switch is difficult for anyone, so I am relying on my
          networking, my determination, and trusting my newfound skills.
        </Typography>
        <Typography className={classes.bodyText}>
          I graduated from the University of Oregon's full stack web development program, and began looking for work. I received accolades from my teaching
          staff, classmates, and recruiters. I graduated with straight A's, the beginning of a new network, and knowing the MERN stack. Other than learning
          MongoDB, Express, React, and Node.js, I also learned MySQL, Git, jQuery, Bootstrap, Material-UI, Google APIs, NASA APIs, version control, and how to
          work in an Agile environment.
        </Typography>
        <Typography className={classes.bodyText}>
          I then never stopped learning and immediately began courses through Udemy to gain even more knowledge. I wanted to improve my skills in React, so I
          began a course teaching Redux, GraphQL, Stripe, and Firebase. Along the way I learned Typescript, SCSS, Shopify, and more!
        </Typography>
        <Typography className={classes.bodyText}>Now, I am currently a web developer for BrandLive!</Typography>
        <Typography className={classes.bodyText} style={{ textAlign: 'center' }}>
          <Link to='/' className={classes.link}>
            Home
          </Link>
        </Typography>
        {/* <img src ={ProfilePhoto} className={classes.profilePhoto} alt='Keith Billings' /> */}
      </Container>
    </Container>
  );
}
