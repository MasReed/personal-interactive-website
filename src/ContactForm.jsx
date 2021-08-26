import React from 'react'
import { useForm } from '@formspree/react'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import TextField from '@material-ui/core/TextField'

import Icon from '@material-ui/core/Icon'

export default function ContactForm() {
  const [state, handleSubmit] = useForm('xzbykngb')

  if (state.succeeded) {
    return <div>Thank you for signing up!</div>
  }

  return (
    <>
      <Box my={4} py={2}>
        <form onSubmit={handleSubmit}>
          <Grid container direction='column' justify='flex-start' alignItems='flex-start' spacing={1}>

            <Grid item>
              <TextField
                id='name'
                color='secondary'
                label='Name'
                placeholder='Jane Doe'
                style={{ margin: '2rem 1rem', outline: '#fff' }}
                variant='outlined'
              />
            </Grid>

            <Grid item>
              <TextField
                id='email'
                color='secondary'
                label='Email'
                placeholder='jane@doe.com'
                helperText='What is your email?'
                style={{ margin: '2rem 1rem', outline: '#fff' }}
                variant='outlined'
              />

              <TextField
                id='phone'
                color='secondary'
                label='Phone'
                placeholder='123-456-7890'
                helperText='(Optional)'
                style={{ margin: '2rem 1rem' }}
                variant='outlined'
              />
            </Grid>

            <Grid item>
              <TextField
                color='secondary'
                id='message'
                label='Your Message'
                multilined
                style={{ margin: '2rem 1rem' }}
                variant='outlined'
              />
            </Grid>

            <Grid item>
              <Button
                color='secondary'
                disabled={state.submitting}
                endIcon={<Icon>send</Icon>}
                style={{ margin: '2rem 1rem' }}
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
