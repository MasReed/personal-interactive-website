import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  dividerStyle: {
    backgroundColor: theme.palette.primary.main,
    minHeight: '1rem',
    opacity: '65%',
  },
  expTile: {
    padding: '1.25rem 0',
  },
  expDate: {
    color: theme.palette.primary.main,
    padding: '.25rem 0 0',
  },
  expDetails: {
    color: theme.palette.primary.main,
    padding: '.25rem 0',
    textIndent: '2rem',
  },
  expInstitute: {
    color: theme.palette.secondary.main,
    padding: '0 2rem 0 0',
  },
  expSubInstitute: {
    color: theme.palette.secondary.main,
    fontSize: '1rem',
    lineHeight: '1.2rem',
    padding: '0 0 .25rem 0',
  },
  expLink: {
    '&:hover': {
      color: theme.palette.orange.main,
      fontWeight: 'bold',
      letterSpacing: '0.085rem',
      textDecoration: 'none'
    },
  },
  expTitle: {
    color: theme.palette.primary.main,
    padding: '.25rem 0',
  }
}))

export default function ExperienceContent() {
  const theme = useTheme()
  const classes = useStyles(theme)

  return (
    <>
      {/* Undergraduate Experience */}
      <Grid container spacing={0} className={classes.expTile}>
        <Grid item sm={4}>
          <Box display='flex' flexDirection='column' height='100%' justifyContent='space-between'>

            {/* Institute & Dates */}
            <Box>
              <Typography className={classes.expInstitute} variant={'h6'}>
                Discovery World
              </Typography>
              <Typography className={classes.expSubInstitute} variant={'h6'}>
                Science + Technology Museum
              </Typography>
              <Typography className={classes.expDate} variant={'body2'}>
                April 2019 - October 2020
              </Typography>
            </Box>
            <Box height='100%' py={1} pl={1}>
              <Divider className={classes.dividerStyle} orientation='vertical' />
            </Box>
          </Box>
        </Grid>

        {/* Title, Description, Links */}
        <Grid item sm={8}>
          <Box>
            <Typography className={classes.expTitle} variant={'subtitle2'}>
              Robotics Educator
            </Typography>
            <Typography className={classes.expDetails} variant={'body2'}>
              An expoloration in STEM outreach and secondary K-8th grade education that included curriculum development, remote content delivery, and leading professional development seminars. Introductory programming courses were taught in Python, Arduino, RobotC, and Unreal Engine 4; all of which necessitated strong mentor-mentee and speaker-audience communication.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Undergraduate Experience */}
      <Grid container spacing={0} className={classes.expTile}>
        <Grid item sm={4}>
          <Box display='flex' flexDirection='column' height='100%' justifyContent='space-between'>

            {/* Institute & Dates */}
            <Box>
              <Typography className={classes.expInstitute} variant={'h6'}>
                University of Iowa
              </Typography>
              <Typography className={classes.expSubInstitute} variant={'h6'}>
                Department of Physics and Astronomy
              </Typography>
              <Typography className={classes.expDate} variant={'body2'}>
                May 2017 - June 2018
              </Typography>
            </Box>
            <Box height='100%' py={1} pl={1}>
              <Divider className={classes.dividerStyle} orientation='vertical' />
            </Box>
          </Box>
        </Grid>

        <Grid item sm={8}>
          {/* Title, Description, Links */}
          <Box>
            <Typography className={classes.expTitle} variant={'subtitle2'}>
              Research Assistant
            </Typography>
            <Typography className={classes.expDetails} variant={'body2'}>
              Expanded our creation of the world's first augmented reality (AR) sandbox for gravitational dynamics, dubbed 'Gravbox', to meet extended research goals. This included creating a simple static website with HTML and CSS to document our opensource project for the world. It was adapted from a project on real-time water flow simulation and was written in Python. This research project cemented a love for programming, development, and teamwork.
            </Typography>
            <Link
              className={classes.expLink}
              href='http://astro.physics.uiowa.edu/gravbox'
              target='_blank'
              rel='noopener'
              variant='overline'
            >
              Gravbox
            </Link>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
