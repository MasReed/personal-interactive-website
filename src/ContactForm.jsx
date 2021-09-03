import React, { useState } from 'react'
import { ValidationError, useForm } from '@formspree/react'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import Alert from '@material-ui/lab/Alert'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'
import Link from '@material-ui/core/Link'
import Snackbar from '@material-ui/core/Snackbar'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  altLinkText: {
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.secondary.main,
      fontWeight: 'bold',
      letterSpacing: '0.085rem',
      textDecoration: 'none'
    }
  },
  inputSection: {
    margin: '0 0 1.25rem 0',
    padding: '0',
  },
  submitSection: {
    margin: '1rem 1rem 0',
  },
  submitButton: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.white.main,
    }
  },
  callToActionTextArea: {
    color: theme.palette.text.primary,
    margin: '.5rem 1rem 0',
  }
}))

export default function ContactForm() {
  const theme = useTheme()
  const classes = useStyles(theme)
  const [state, handleSubmit] = useForm('xzbykngb')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [toastState, setToastState] = useState(false)

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value})
  }

  const submitForm = async (event) => {
    event.preventDefault()

    const res = await handleSubmit(event)
    console.log(res)

    if (state.succeeded) {
      setToastState(true)

      setForm({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
    }
  }

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        autoHideDuration={5000}
        onClose={() => setToastState(false)}
        open={toastState}
      >
        <Alert severity='success' color='info'>Thank you reaching out!</Alert>
      </Snackbar>

      <Box pb={2}>
        <Typography color='primary' variant='h3'>
          <strong>Hey, you...</strong> Thanks for checking out my website!
        </Typography>

        <Box className={classes.callToActionTextArea}>
          <Box pt={1}>
            <Typography variant='body2'>
              Looking for my resume?&nbsp;
              {<Link
                className={classes.altLinkText}
                download
                href='Mason Reed Full Stack Developer Resume.pdf'
              >
                You can download it here
              </Link>}.
            </Typography>
          </Box>

          <Box pt={3}>
            <Typography color='primary' variant='subtitle1'>
              Have a suggestion or want to connect? Leave me a message below!
            </Typography>
          </Box>
        </Box>
      </Box>

      <form id='contactForm' onSubmit={(event) => submitForm(event)}>
        <Grid
          container
          direction='row'
          spacing={0}
        >
          {/* Contact Name */}
          <Grid item xs={12} className={classes.inputSection}>
            <TextField
              id='name'
              color='secondary'
              fullWidth
              label='Name'
              name='name'
              onChange={handleChange}
              placeholder='Jane Doe'
              required
              size='small'
              value={form.name}
              variant='outlined'
            />
            <ValidationError field='name' prefix='Name' errors={state.errors} />
          </Grid>

          {/* Contact Email */}
          <Grid container className={classes.inputSection}>
            <Grid item xs={12} sm={5}>
              <TextField
                id='email'
                color='secondary'
                fullWidth
                label='Email'
                name='email'
                onChange={handleChange}
                placeholder='jane@doe.com'
                required
                size='small'
                value={form.email}
                variant='outlined'
              />
              <ValidationError field='email' prefix='Email' errors={state.errors} />
            </Grid>

            {/* Decorative Spacing Element */}
            <Grid item xs={false} sm={2}>
              <Typography
                align='center'
                style={{ color: theme.palette.primary.main + '7F', padding: '.25rem 0' }}
                variant='h6'
              >
                -
              </Typography>
            </Grid>

            {/* Contact Phone */}
            <Grid item xs={12} sm={5}>
              <TextField
                id='phone'
                color='secondary'
                fullWidth
                label='Phone'
                name='phone'
                onChange={handleChange}
                placeholder='123-456-7890'
                size='small'
                value={form.phone}
                variant='outlined'
              />
              <ValidationError field='phone' prefix='Phone' errors={state.errors} />
            </Grid>
          </Grid>

          {/* Contact Message */}
          <Grid item xs={12} className={classes.inputSection}>
            <TextField
              id='message'
              color='secondary'
              fullWidth
              label='Your Message'
              minRows={4}
              multiline
              name='message'
              onChange={handleChange}
              required
              size='small'
              value={form.message}
              variant='outlined'
            />
            <ValidationError field='message' prefix='Message' errors={state.errors} />
          </Grid>

          {/* Contact Submission Area */}
          <Grid
            item
            container
            direction='row'
            alignItems='flex-start'
            justifyContent='space-between'
            xs={12}
            className={classes.submitSection}
          >
            <Box display='flex' flexDirection='column' justifyContent='space-between'>
              <Typography variant='caption'>
                Alternatively, send an email to:&nbsp;
              </Typography>

              <Typography
                className={classes.altLinkText}
                component={Link}
                href='mailto:contact@monsed.com'
                target='_blank'
                rel='noopener'
                variant='caption'
              >
                contact@monsed.com
              </Typography>
            </Box>

            {/* Submit Form Button */}
            <Button
              className={classes.submitButton}
              disabled={state.submitting}
              endIcon={<Icon>send</Icon>}
              form='contactForm'
              type='submit'
              variant='contained'
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}
