import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles({
  bodyNavItem: {
    textAlign: 'center',
    margin: '1rem 0',
    transition: '0.5s',
    '&:hover': {
      color: 'lightblue',
    },
  },
  active: {
    fontWeight: '600',
    borderBottom: '1px black solid',
  },
});

export default function HomeBodyNav() {
  const classes = useStyles();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Grid container className={classes.homeBodyNav} justify='center'>
      <Grid item xs={4} className={classes.bodyNavItem}>
        <Link to='/projects'>
          <Typography variant='inherit'>{pathname === '/projects' ? <span className={classes.active}>Projects</span> : 'Projects'}</Typography>
        </Link>
      </Grid>
      {/* <Grid item xs={4} className={classes.bodyNavItem}>
        <Link to='/repositories'>
          <Typography variant='inherit'>{pathname === '/repositories' ? <span className={classes.active}>Repositories</span> : 'Repositories'}</Typography>
        </Link>
      </Grid> */}
      <Grid item xs={4} className={classes.bodyNavItem}>
        <Link to='/articles'>
          <Typography variant='inherit'>{pathname === '/articles' ? <span className={classes.active}>Articles</span> : 'Articles'}</Typography>
        </Link>
      </Grid>
    </Grid>
  );
}
