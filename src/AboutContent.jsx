import React from 'react'

import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import WhatshotIcon from '@material-ui/icons/Whatshot'

import theme from './theme'

const useStyles = makeStyles({
  aboutTile: {
    padding: '1.25rem 1.75rem'
  },
  aboutTitle: {
    color: theme.palette.purple.main
  },
  detailBox: {
    margin: '0 0 .75rem 0'
  },
  detailSubtitles: {
    fontSize: '1rem',
    fontWeight: 700
  },
  detailText: {
    marginTop: '0'
  },
  dividerMargins: {
    margin: '2rem 0'
  },
})

export default function AboutContent() {
  const classes = useStyles()

  return (
    <Box id='#about' display='flex'>
      <Grid container spacing={0}>
        {/* About Me */}
        <Grid item sm={4}>
          <Box display='flex' flexDirection='column' height='100%' justifyContent='space-between'>
            <Box className={classes.aboutTile}>
              <Typography color='primary' variant='h4'>About Me</Typography>
              <Divider className={classes.dividerMargins} />
              <Typography color='primary' variant='body1'>
                I love finding solutions! I am a full stack
                developer and masterful problem solver. My background is
                in astrophysics and I have experience in STEM education.
                I have a passion to learn new things and share them with
                others. I also enjoy multiplayer strategy
                games, such as Magic: the Gathering and Catan!
              </Typography>
            </Box>

            <Box
              className={classes.aboutTile}
              display='flex'
              flexDirection='row'
              justifyContent='space-around'
            >
              {/* LinkedIn Link */}
              <Link
                href='http://linkedin.com/in/masreed'
                target='_blank'
                rel='noopener'
              >
                <Box display='flex' direction='row' alignItems='center'>
                  <LinkedInIcon color='primary' fontSize='large' />
                  <Box px={1}>
                    <Typography
                      color='primary'
                      variant='overline'
                    >
                      LinkedIn
                    </Typography>
                  </Box>
                </Box>
              </Link>

              {/* Github Link */}
              <Link
                href='http://github.com/masreed'
                target='_blank'
                rel='noopener'
              >
                <Box display='flex' direction='row' alignItems='center'>
                  <GitHubIcon color='primary' fontSize='large' />
                  <Box px={1}>
                    <Typography
                      color='primary'
                      variant='overline'
                    >
                      GitHub
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Box>
          </Box>
        </Grid>

        {/* Headshot Image */}
        <Grid item sm={4}>
          <Box className={classes.aboutTile}>
          <img src='images/finalHeadshot.jpg' alt='Masons headshot'
            style={{ maxHeight: '100%', width: '100%', borderRadius: '3%' }}/>
          </Box>
        </Grid>

        {/* About Me Facts */}
        <Grid item sm={4}>
          <Box display='flex' flexDirection='column' height='100%' justifyContent='space-between'>
            <Box className={classes.aboutTile}>
              <Typography color='primary' variant='h4'>Details</Typography>
              <Divider className={classes.dividerMargins} />

              {/* Name */}
              <Box className={classes.detailBox}>
                <Typography
                  color='primary'
                  variant='subtitle1'
                  className={classes.detailSubtitles}
                >
                  Name:
                </Typography>
                <Typography
                  variant='body1'
                  className={classes.detailText}
                >
                  Mason Reed
                </Typography>
              </Box>

              {/* Location */}
              <Box className={classes.detailBox}>
                <Typography
                  color='primary'
                  variant='subtitle1'
                  className={classes.detailSubtitles}
                >
                  Location:
                </Typography>
                <Typography
                  variant='body1'
                  className={classes.detailText}
                >
                  Milwaukee, WI - USA
                </Typography>
              </Box>

              {/* Pets */}
              <Box className={classes.detailBox}>
                <Typography
                  color='primary'
                  variant='subtitle1'
                  className={classes.detailSubtitles}
                >
                  Pets
                </Typography>
                <Typography
                  variant='body1'
                  className={classes.detailText}
                >
                  Yes
                </Typography>
              </Box>
            </Box>

            <Box
              className={classes.aboutTile}
              display='flex'
              flexDirection='row'
              justifyContent='space-around'
            >
              {/* Hobbies Link */}
              <Link
                style={{ pointerEvents: 'none' }}
                href='http://monsed.com/hobbies'
                target='_blank'
                rel='noopener'
              >
                <Box display='flex' direction='row' alignItems='center'>
                  <WhatshotIcon color='secondary' fontSize='large' />
                  <Box px={1}>
                    <Typography
                      color='primary'
                      variant='overline'
                    >
                      Hobbies
                    </Typography>
                  </Box>
                </Box>
              </Link>

              {/* Instagram Link */}
              <Link
                href='http://instagram.com/leta_thelovablehusky'
                target='_blank'
                rel='noopener'
              >
                <Box display='flex' direction='row' alignItems='center'>
                  <InstagramIcon color='primary' fontSize='large' />
                  <Box px={1}>
                    <Typography
                      color='primary'
                      variant='overline'
                    >
                      Instagram
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
