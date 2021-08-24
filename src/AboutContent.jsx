import React from 'react'

import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'

import theme from './theme'

const useStyles = makeStyles({
  aboutTile: {
    padding: '1.25rem 1.75rem'
  },
  aboutTitle: {
    color: theme.palette.purple.main
  },
  eduInstitute: {
    color: theme.palette.cream.main
  },
  eduTitle: {
    color: theme.palette.orange.main
  }
})

export default function AboutContent() {
  const classes = useStyles()

  return (
    <Box id='#about' display='flex'>
      <Grid container spacing={0}>
        {/* About Me Statement */}
        <Grid item sm={4}>
          <Box className={classes.aboutTile}>
            <Box mb={'2rem'}>
              <Typography color='primary' variant='h4'>About Me</Typography>
            </Box>
            <Divider />
            <Box mt={'2rem'}>
              <Typography color='primary' variant='body1'>
                I love finding solutions! I am a full stack
                developer and masterful problem solver. My background is
                in astrophysics and I have experience in STEM education.
                I have a passion to learn new things and share them with
                others. I also enjoy multiplayer strategy
                games, such as Magic: the Gathering and Catan!
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Headshot Image */}
        <Grid item sm={4}>
          <Box className={classes.aboutTile}>
          <img src='images/headshot3.jpg' alt='Masons headshot'
            style={{ maxHeight: '100%', width: '100%', borderRadius: '3%' }}/>
          </Box>
        </Grid>

        {/* About Me Facts */}
        <Grid item sm={4}>
          <Box className={classes.aboutTile}>
            <Typography color='primary' variant='h4'>Details</Typography>
            <Box>
              <Typography>Name:</Typography>
              <Typography variant='p'>Mason Reed</Typography>
            </Box>
            <Box>
              <Typography>Location:</Typography>
              <Typography variant='p'>Milwaukee, WI - USA</Typography>
            </Box>
            <Box>
              <Typography>Pets</Typography>
              <Typography variant='p'>Yes</Typography>
            </Box>
            <Box>
              <Link
                href='http://www.linkedin.com/in/masreed'
                target='_blank'
                rel='noopener'
              >
                LinkedIn
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
