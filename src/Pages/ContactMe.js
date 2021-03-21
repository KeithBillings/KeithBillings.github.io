import React, { useRef } from 'react';
import { Container, Grid, makeStyles, TextField, Typography, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import ResumeDOCX from '../data/Keith Billings Resume.docx';
import ResumePDF from '../data/Keith Billings Resume.pdf';

const useStyles = makeStyles({
  contactMeWrapper: {
    margin: '10vh auto auto auto',
  },
  title: {
    fontFamily: 'Playfair Display',
    textAlign: 'center',
    borderBottom: '1px black solid',
    paddingBottom: '1rem',
  },
  contactUsForm: {
    marginTop: '2rem',
  },
  button: {
    backgroundColor: '#ADD8E6',
    color: '#FFFFFF',
    fontSize: '1rem',
    border: 'none',
    padding: '0.375rem 0.75rem',
    borderRadius: '0.25rem',
    transition: '0.5s',
    fontFamily: 'Playfair Display',
    '&:hover': {
      color: '#FFFFFF',
      backgroundColor: '#81cde6',
      textDecoration: 'none',
    },
  },
  alightButton: {
    textAlign: 'right',
    marginTop: '2rem',
  },
  alignCenter: {
    textAlign: 'center',
  },
  contactText: {
    fontFamily: 'inherit',
    letterSpacing: '1px',
    transition: '0.5s',
    '&:hover': {
      color: 'lightblue',
    },
  },
  resumeWrapper: {
    fontFamily: 'inherit',
    letterSpacing: '1px',
  },
  lightblueOnHover: {
    transition: '0.5s',
    '&:hover': {
      color: 'lightblue',
    },
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ADD8E6',
    },
  },
});

export default function ContactMe() {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const scriptURL = 'https://script.google.com/macros/s/AKfycby4Vgy5C6EMUsmKzipUp5_sjebO3XF_PELdCE5fg1cO_d3x1KGRSV7_YXfLw2-KVNFzjg/exec';

  const onSubmit = (data) => {
    const submitButton = document.getElementById('contact-form-submit-button');
    const contactForm = document.getElementById('contact-form');

    submitButton.innerText = 'Submitting...';

    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(contactForm),
    })
      .then((res) => {
        submitButton.innerText = 'Sent!';
        setTimeout(() => {
          submitButton.innerText = 'Submit';
        }, 5000);
        console.log('contact form is: ', contactForm);
        console.log('response is: ', res);
      })
      .catch((error) => {
        console.log('error is', error);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.contactMeWrapper}>
        <Typography variant='h3' className={classes.title} gutterBottom={true}>
          Contact Me
        </Typography>
        <Container className={classes.alignCenter}>
          <Typography className={classes.contactText}>
            <a href='mailto:keithbillingsbusiness@gmail.com'>
              <MailOutlineIcon fontSize={'small'} className={classes.contactIcons} /> keithbillingsbusiness@gmail.com
            </a>
          </Typography>
          <Typography className={classes.contactText}>
            <a href='https://github.com/KeithBillings'>
              <GitHubIcon fontSize={'small'} className={classes.contactIcons} /> github.com/KeithBillings
            </a>
          </Typography>
          <Typography className={classes.contactText}>
            <a href='https://www.linkedin.com/in/keithbillings/'>
              <LinkedInIcon fontSize={'small'} className={classes.contactIcons} /> linkedin.com/in/keithbillings
            </a>
          </Typography>
          <Typography className={classes.resumeWrapper}>
            Download My Resume:{' '}
            <a download href={ResumeDOCX} className={classes.lightblueOnHover}>
              <FormatAlignLeftIcon fontSize={'small'} className={classes.contactIcons} /> DocX
            </a>{' '}
            or{' '}
            <a download href={ResumePDF} className={classes.lightblueOnHover}>
              <PictureAsPdfIcon fontSize={'small'} className={classes.contactIcons} /> PDF
            </a>
          </Typography>
        </Container>

        <Grid container justify='center'>
          <Grid item>
            <form id='contact-form' className={classes.contactUsForm} onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <label>Name</label>
                  <TextField
                    name='user_name'
                    required={true}
                    placeholder='Your Name'
                    autoComplete='name'
                    fullWidth={true}
                    variant='outlined'
                    color='primary'
                    inputRef={register}
                  />
                </Grid>

                <Grid item xs={12}>
                  <label>Email</label>
                  <TextField
                    name='user_email_address'
                    required={true}
                    type='email'
                    placeholder='Email'
                    autoComplete='email'
                    fullWidth={true}
                    variant='outlined'
                    color='primary'
                    inputRef={register}
                  />
                </Grid>

                <Grid item xs={12}>
                  <label>Message</label>
                  <TextField
                    name='message'
                    required={true}
                    placeholder='Leave your message here'
                    fullWidth={true}
                    variant='outlined'
                    color='primary'
                    multiline={true}
                    rows='8'
                    inputRef={register}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} className={classes.alightButton}>
                <button id='contact-form-submit-button' type='submit' className={classes.button}>
                  Submit
                </button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
