import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  imageWrapper: {
    position: 'relative',
    display: 'inline-block',
    transition: '0.5s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    display: 'none',
    padding: '1rem',
    textAlign: 'justify',
  },
});

export default function ProjectCard({ data, id }) {
  const { image, description } = data;
  const classes = useStyles();

  return (
    <Grid item md={4}>
      <Link to={`/project/${id}`}>
        <div className={classes.imageWrapper}>
          <img src={image} alt={description} className={classes.image} />
        </div>
      </Link>
    </Grid>
  );
}
