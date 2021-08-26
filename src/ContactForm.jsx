import React from 'react'
import { useForm } from '@formspree/react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import TextField from '@material-ui/core/TextField'

import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  inputSection: {
    margin: '1rem',
  },
  submitButton: {
    margin: '1rem'
  }
})

export default function ContactForm() {
  const classes = useStyles()
  const [state, handleSubmit] = useForm('xzbykngb')

  if (state.succeeded) {
    return <div>Thank you for signing up!</div>
  }

  return (
    <>
      <Box my={4} p={4}>
        <form onSubmit={handleSubmit} noValidate autoComplete='off'>
          <Grid
            container
            direction='column'
            justifyContent='space-between'
            alignItems='flex-start'
            spacing={1}
          >
            <Grid item>
              <TextField
                id='name'
                className={classes.inputSection}
                color='secondary'
                label='Name'
                placeholder='Jane Doe'
                size='small'
                variant='outlined'
              />
            </Grid>

            <Grid item>
              <TextField
                id='email'
                className={classes.inputSection}
                color='secondary'
                label='Email'
                placeholder='jane@doe.com'
                size='small'
                variant='outlined'
              />

              <TextField
                id='phone'
                className={classes.inputSection}
                color='secondary'
                label='Phone'
                placeholder='123-456-7890'
                size='small'
                variant='outlined'
              />
            </Grid>

            <Grid item>
              <TextField
                id='message'
                className={classes.inputSection}
                color='secondary'
                label='Your Message'
                multiline
                size='small'
                variant='outlined'
              />
            </Grid>

            <Grid item>
              <Button
                className={classes.submitButton}
                color='secondary'
                disabled={state.submitting}
                endIcon={<Icon>send</Icon>}
                type='submit'
                variant='contained'
              >
                Send
              </Button>
            </Grid>

          </Grid>
        </form>
      </Box>

      <Divider style={{ marginTop: '5rem' }}/>
      <Box>
        <p>Not Working? Try these instead.</p>
        <p>Send an email to contact@monsed.com</p>
        <Link color='secondary' href="mailto:name@email.com">Email</Link>
      </Box>
    </>
  )
}
