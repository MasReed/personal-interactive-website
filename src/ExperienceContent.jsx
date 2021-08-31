import React from 'react'

import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'
import theme from './theme'

const useStyles = makeStyles({
  expTile: {
    // color: '#49464d',
    color: theme.palette.orange.main,
    padding: '1.25rem 0'
  },
  expDate: {
    color: theme.palette.primary.main
  },
  expDetails: {
    color: theme.palette.primary.main
  },
  expTitle: {
    color: theme.palette.purple.main
  }
})

export default function ExperienceContent() {
  const classes = useStyles()

  return (
    <>
      {/* Discovery World Experience */}
      <Grid container spacing={0} className={classes.expTile}>
        <Grid item sm={4}>
          <Typography variant='subtitle1'>
            <strong>Discovery World | Science + Technology Museum</strong>
          </Typography>
          <Typography className={classes.expDate} variant='body2'>
            April 2019 - October 2020
          </Typography>
        </Grid>
        <Grid item sm={8}>
          <Typography className={classes.expTitle} variant='h6'>Robotics Educator</Typography>
          <Typography className={classes.expDetails} variant='body2'>
            An experience in STEM outreach and education that included curriculum development,
            remote content delivery, and leading professional development seminars. Introductory
            programming in Python, Arduino, and RobotC necessitated strong student-mentor
            communication.
          </Typography>
        </Grid>
      </Grid>

      {/* Undergraduate Experience */}
      <Grid container spacing={0} className={classes.expTile}>
        <Grid item sm={4}>
          <Typography variant='subtitle1'>
            <strong>University of Iowa | Department of Physics and Astronomy</strong>
          </Typography>
          <Typography className={classes.expDate} variant='body2'>
            May 2017 - June 2018
          </Typography>
        </Grid>
        <Grid item sm={8}>
          <Typography className={classes.expTitle} variant='h6'>Research Assistant</Typography>
          <Typography className={classes.expDetails} variant='body2'>
            Created the world's first augmented reality (AR) sandbox for gravitational
            dynamics, dubbed 'Gravbox'. It was adapted from a project on real-time water
            flow simulation and was written in Python along side undergraduate colleagues.
            This research project incepted a love for programming, development, and teamwork.
          </Typography>
          <Link
            href='http://astro.physics.uiowa.edu/gravbox'
            target='_blank'
            rel='noopener'
          >
            Gravbox
          </Link>
        </Grid>
      </Grid>
    </>
  )
}
