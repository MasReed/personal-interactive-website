import React from 'react'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import SaveAltIcon from '@material-ui/icons/SaveAlt'
import WhatshotIcon from '@material-ui/icons/Whatshot'

const useStyles = makeStyles((theme) => ({
  aboutGridItemPadding: {
    padding: '1.25rem 1.75rem'
  },
  detailItemBox: {
    margin: '0 0 1.1rem 0'
  },
  dividerMargins: {
    backgroundColor:' rgba(29, 27, 30, 0.15)',
    margin: '2rem 0'
  },
  linkBox: {
    color: 'primary',
    '&:hover': {
      color: theme.palette.secondary.main,
      fontWeight: 700,
      letterSpacing: '0.1rem',
      textDecoration: 'none',
      '& $linkText': {
        color: theme.palette.secondary.main,
        fontWeight: 700,
        letterSpacing: '0.1rem',
        textDecoration: 'none',
      }
    }
  },
  linkText: {
    color: 'primary'
  },
}))

export default function AboutContent() {
  const theme = useTheme()
  const classes = useStyles(theme)

  return (
    <Box id='#about' display='flex'>
      <Grid container spacing={0}>
        {/* About Me */}
        <Grid item sm={4}>
          <Box display='flex' flexDirection='column' height='100%' justifyContent='space-between'>
            <Box className={classes.aboutGridItemPadding}>
              <Typography color='primary' variant='h3'>About Me</Typography>

              <Divider className={classes.dividerMargins} />

              {/* Personal Statement */}
              <Typography color='primary' variant='body1'>
                I love finding solutions! I am a full stack web
                developer and masterful problem solver. My background is
                in astrophysics and I have experience in STEM education.
                I have a passion to learn new things and share them with
                others. I also enjoy multiplayer strategy
                games, such as Magic: the Gathering and Catan!
              </Typography>
            </Box>

            <Box
              className={classes.aboutGridItemPadding}
              display='flex'
              flexDirection='row'
              justifyContent='space-around'
            >
              {/* LinkedIn Link */}
              <Link
                className={classes.linkBox}
                href='http://linkedin.com/in/masreed'
                target='_blank'
                rel='noopener'
              >
                <Box display='flex' direction='row' alignItems='center'>
                  <LinkedInIcon fontSize='large' />
                  <Box px={1}>
                    <Typography className={classes.linkText} variant='overline'>LinkedIn</Typography>
                  </Box>
                </Box>
              </Link>

              {/* Resume PDF Link */}
              <Link
                download
                className={classes.linkBox}
                href='Mason Reed Full Stack Developer Resume.pdf'
                target='_blank'
                rel='noopener'
              >
                <Box display='flex' direction='row' alignItems='center'>
                  <SaveAltIcon fontSize='large' />
                  <Box px={1}>
                    <Typography className={classes.linkText} variant='overline'>Resume</Typography>
                  </Box>
                </Box>
              </Link>
            </Box>
          </Box>
        </Grid>

        {/* Headshot Image */}
        <Grid item sm={4}>
          <Box className={classes.aboutGridItemPadding}>
            <img src='images/finalHeadshot.jpg' alt='Masons headshot'
              style={{ maxHeight: '100%', width: '100%', borderRadius: '3%' }}
            />
          </Box>
        </Grid>

        {/* About Me Facts */}
        <Grid item sm={4}>
          <Box display='flex' flexDirection='column' height='100%' justifyContent='space-between'>
            <Box className={classes.aboutGridItemPadding}>
              <Typography color='primary' variant='h3'>Details</Typography>
              <Divider className={classes.dividerMargins} />

              {/* Name */}
              <Box className={classes.detailItemBox}>
                <Typography
                  color='primary'
                  variant='subtitle1'
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
              <Box className={classes.detailItemBox}>
                <Typography
                  color='primary'
                  variant='subtitle1'
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
              <Box className={classes.detailItemBox}>
                <Typography
                  color='primary'
                  variant='subtitle1'
                >
                  Pets
                </Typography>
                <Typography
                  variant='body1'
                  className={classes.detailText}
                >
                  <Link
                    href='http://instagram.com/leta_thelovablehusky'
                    target='_blank'
                    rel='noopener'
                  >
                    Yes
                  </Link>
                </Typography>
              </Box>
            </Box>

            <Box
              className={classes.aboutGridItemPadding}
              display='flex'
              flexDirection='row'
              justifyContent='space-around'
            >
              {/* Github Link */}
              <Link
                className={classes.linkBox}
                href='http://github.com/masreed'
                target='_blank'
                rel='noopener'
              >
                <Box display='flex' direction='row' alignItems='center'>
                  <GitHubIcon fontSize='large' />
                  <Box px={1}>
                    <Typography className={classes.linkText} variant='overline'>GitHub</Typography>
                  </Box>
                </Box>
              </Link>

              {/* Hobbies Link */}
              {/* TEMPORARILY DISABLED via pointerEvents: 'none' */}
              <Link
                style={{ pointerEvents: 'none' }}
                className={classes.linkBox}
                href='http://monsed.com/hobbies'
                target='_blank'
                rel='noopener'
              >
                <Box display='flex' direction='row' alignItems='center'>
                  <WhatshotIcon color='secondary' fontSize='large' />
                  <Box px={1}>
                    <Typography className={classes.linkText} variant='overline'>Hobbies</Typography>
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
