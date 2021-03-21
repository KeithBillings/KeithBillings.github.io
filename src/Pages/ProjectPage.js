import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, makeStyles, Typography } from '@material-ui/core';
import projectListData from '../data/projectListData';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  projectWrapper: {
    margin: '10vh auto auto auto',
  },
  projectScreenshot: {
    display: 'block',
    width: '75%',
    margin: 'auto',
  },
  title: {
    fontFamily: 'Playfair Display',
    textAlign: 'center',
  },
  descriptionText: {
    fontFamily: 'inherit',
    textAlign: 'justify',
    padding: '2rem 15%',
  },
  links: {
    fontFamily: 'Playfair Display',
    textAlign: 'center',
  },
  link: {
    transition: '0.5s',
    '&:hover': {
      color: 'lightblue',
    },
  },
});

export default function ProjectPage() {
  const classes = useStyles();
  const { id } = useParams();
  const projectData = projectListData[id];
  const { title, image, deployment, description } = projectData;

  return (
    <Container className={classes.projectWrapper}>
      <Typography variant='h3' gutterBottom={true} className={classes.title}>
        {title}
      </Typography>
      <img src={image} alt='project screenshot' className={classes.projectScreenshot} data-aos='zoom-out' />
      <Typography className={classes.descriptionText}>{description}</Typography>
      <Typography className={classes.links}>
        <a href={deployment} className={classes.link}>
          Deployment Link
        </a>{' '}
        |{' '}
        <Link to='/' className={classes.link}>
          Home
        </Link>
      </Typography>
    </Container>
  );
}
