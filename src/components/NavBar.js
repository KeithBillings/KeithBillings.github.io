import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  appbar: {
    boxShadow: 'none',
    borderBottom: '1px lightgrey solid',
    flexGrow: 1,
  },
  toolbar: {
    maxWidth: '1280px',
    margin: 'auto',
    width: '90%',
    padding: '0 5vw',
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Playfair Display',
    transition: '0.5s',
    '&:hover': {
      color: 'lightblue',
    },
  },
});

export default function NavBar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  let history = useHistory();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    const { menuItem } = event.currentTarget.dataset || '';
    if (menuItem !== undefined) {
      history.push(`/${menuItem}`);
    }

    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  return (
    <AppBar position='fixed' color='default' className={classes.appbar}>
      <Toolbar className={classes.toolbar} variant='dense'>
        <Typography variant='h6' className={classes.title}>
          <Link to='/'>KB</Link>
        </Typography>
        <IconButton
          edge='end'
          color='inherit'
          aria-label='menu'
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup='true'
          onClick={handleToggle}
        >
          <MenuIcon />
        </IconButton>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal placement='bottom-end'>
          {({ TransitionProps, placement }) => (
            <Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id='menu-list-grow' onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose} data-menu-item={'aboutme'}>
                      About Me
                    </MenuItem>
                    <MenuItem onClick={handleClose} data-menu-item={'contactme'}>
                      Contact Me
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Toolbar>
    </AppBar>
  );
}
