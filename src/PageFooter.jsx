import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import GitHubIcon from '@material-ui/icons/GitHub';
import siteMap from './content/siteMap.json'
import sectionInfo from './content/sectionInfo.json'

const useStyle = makeStyles((theme) => ({
  contentSpacingStyle: {
    margin: '3rem 0',
    padding: '0 2rem',
    [theme.breakpoints.down('sm')]: {
      margin: '1rem 0',
      padding: '0 1rem',
    },
  },
  footerStyle: {
    backgroundColor: theme.palette.secondary.main,
    margin: 0,
    padding: '2rem 0'
  },
}))

export default function PageFooter () {
  const theme = useTheme()
  const classes = useStyle(theme)

  return (
    <Box id='footer' component='footer' className={classes.footerStyle}>
      <Container>
        {/* Main Content */}
        <Box className={classes.contentSpacingStyle}>
          <Grid container spacing={5}>

            {/* Site Map Links */}
            <Grid item xs={12} sm={4}>
              <Box py={2}>
                <Typography variant='h6'>Site Map</Typography>
              </Box>
              <Divider />
              {
                siteMap.map(link => (
                  <Box key={link.url} pt={2}>
                    <Typography
                      component={Link}
                      href={link.url}
                      target='_blank'
                      rel='noopener'
                      color='textPrimary'
                      variant='body2'
                    >
                      {link.text}
                    </Typography>
                  </Box>
                ))
              }
            </Grid>

            {/* CV Section Jump Links*/}
            <Grid item xs={12} sm={4}>
              <Box py={2}>
                <Typography variant='h6'>Sections</Typography>
              </Box>
              <Divider />

              {
                sectionInfo.map((section) => (
                  <Box key={section.id} pt={2}>
                    <Typography
                      component={Link}
                      href={section.hashLink}
                      color='textPrimary'
                      variant='body2'
                    >
                      {section.linkText}
                    </Typography>
                  </Box>
                ))
              }
            </Grid>

            {/* About This Site */}
            <Grid item xs={12} sm={4}>
              <Box py={2}>
                <Typography variant='h6'>About This Site</Typography>
              </Box>
              <Divider />
              <Box pt={2}>
                <Typography color='textPrimary' variant='body2'>
                  This is my personal website for showcasing my curriculum vitae. It is written using the create-react-app build environment, JavaScript, ReactJS, and Material-ui. This site is hosted on my domain via GitHub Pages! Check out the repository below:
                </Typography>
              </Box>
              <Box pt={2}>
                <Link
                  href='http://www.github.com/MasReed/personal-interactive-website'
                  target='_blank'
                  rel='noopener'
                >
                  <Box display='flex' direction='row' alignItems='center'>
                    <GitHubIcon />
                    <Box px={1}>
                      <Typography color='textPrimary' variant='body2'>
                        /MasReed/personal-interactive-website
                      </Typography>
                    </Box>
                  </Box>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Divider />

        {/* Copyright Tag */}
        <Box mt={2} mb={0} py={4}>
          <Typography align='center' variant='body1'>
            MasReed &reg; { new Date().getFullYear() }
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
