import React, { useState } from 'react'
import { useForm } from '@formspree/react'

import Alert from '@material-ui/lab/Alert'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Snackbar from '@material-ui/core/Snackbar'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core/styles'
import theme from './theme'

const useStyles = makeStyles({
  formContainer: {
    margin: '1rem 0'
  },
  inputSection: {
    margin: '0 0 1.25rem 0',
    padding: '0'
  },
  submitButton: {
    margin: '1.25rem 1rem 0'
  },
})

export default function ContactForm() {
  const classes = useStyles()
  const [state, handleSubmit] = useForm('xzbykngb')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [toastState, setToastState] = useState({
    open: false,
    vertical: 'bottom',
    horizontal: 'right'
  })

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value})
  }

  const submitForm = (event) => {
    event.preventDefault()
    console.log(event)

    handleSubmit(event)

    // if (state.succeeded) {
    //   setToastState({ ...toastState, open: true })
    // }
  }

  // const formRef = document.getElementById('contactForm')
  // formRef.onsubmit = submitForm

  return (
    <Container className={classes.formContainer}>
      <Snackbar
        anchorOrigin={{ vertical: toastState.vertical, horizontal: toastState.horizontal }}
        autoHideDuration={5000}
        onClose={() => setToastState({ ...toastState, open: false })}
        open={toastState.open}
      >
        <Alert severity='success' color='info'>Thank you reaching out!</Alert>
      </Snackbar>

      <form id='contactForm' onSubmit={(event) => submitForm(event)}>
        <Grid
          container
          direction='row'
          spacing={0}
        >

          <Grid item xs={12} className={classes.inputSection}>
            <TextField
              id='name'
              color='secondary'
              fullWidth
              label='Name'
              name='name'
              onChange={handleChange}
              placeholder='Jane Doe'
              size='small'
              value={form.name}
              variant='outlined'
            />
          </Grid>

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
                size='small'
                value={form.email}
                variant='outlined'
              />
            </Grid>

            <Grid item xs={false} sm={2}>
              <Typography
                align='center'
                style={{ color: theme.palette.purple.main + '7F', padding: '.25rem 0' }}
                variant='h6'
              >
                -OR-
              </Typography>
            </Grid>

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
            </Grid>
          </Grid>

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
              size='small'
              value={form.message}
              variant='outlined'
            />
          </Grid>

          <Grid item xs={12}>
            <Box display='flex' justifyContent='space-between' className={classes.submitButton}>

              <Box display='flex' flexDirection='column'>
                <Typography alignself='flex-start' variant='caption'>Alternatively, send an email to:</Typography>
                <Link color='secondary' href="mailto:contact@monsed.com">
                  <Typography variant='caption'>contact@monsed.com</Typography>
                </Link>
              </Box>

              <Box>
                <Button
                  color='secondary'
                  disabled={state.submitting}
                  endIcon={<Icon>send</Icon>}
                  form='contactForm'
                  type='submit'
                  variant='contained'
                >
                  Send
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}
