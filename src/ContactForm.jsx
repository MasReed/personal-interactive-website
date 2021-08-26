import React from 'react'
import { useForm } from '@formspree/react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
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

  if (state.succeeded) {
    return <div>Thank you for signing up!</div>
  }

  return (
    <Container className={classes.formContainer}>
      <form onSubmit={handleSubmit} noValidate autoComplete='off'>
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
              placeholder='Jane Doe'
              size='small'
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
                placeholder='jane@doe.com'
                size='small'
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
                placeholder='123-456-7890'
                size='small'
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
              size='small'
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
