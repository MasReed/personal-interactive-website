import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  cardTheme: {
    backgroundColor: theme.palette.cream.main,
    boxShadow: theme.shadows[18],
    color: 'primary',
    '&:hover': {
      boxShadow: theme.shadows[24],
    }
  },
  cardImage: {
    height: 0,
    paddingTop: '56.25%'
  },
  cardLink: {
    color: 'primary',
    '&:hover': {
      color: theme.palette.orange.main,
      fontWeight: 'bold',
      letterSpacing: '0.085rem',
      textDecoration: 'none'
    }
  },
  cardActionBox: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 .5rem .25rem',
    width: '100%'
  }
}))

export default function ProjectsContent() {
  const theme = useTheme()
  const classes = useStyles(theme)

  return (
    <Grid container spacing={3}>
      {/* Restaurant PoS */}
      <Grid item xs={12} sm={4}>
        <Card className={classes.cardTheme} variant='outlined'>
          <CardHeader
            title='Nodo Manager'
            subheader='Restaurant Point of Sale'
          />

          <CardMedia
            className={classes.cardImage}
            image='./images/nodoScreenshot.jpg'
            title='Nodo Manager'
          />

          <CardContent>
            <Typography variant='body2'>
              An app similar to GrubHub or DoorDash, but also used to manage your restaurant! Built with a full MERN stack and usable by both sellers and consumers. This is my first independent web application.
            </Typography>
          </CardContent>

          <CardActions>
            <Box className={classes.cardActionBox}>
              <Link
                className={classes.cardLink}
                href='http://restaurant.monsed.com'
                target='_blank'
                rel='noopener'
              >
                Heroku
              </Link>

              <Link
                className={classes.cardLink}
                href='https://github.com/MasReed/Nodo-Manager'
                target='_blank'
                rel='noopener'
              >
                Github Repository
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Grid>

      {/* Personal Website */}
      <Grid item xs={12} sm={4}>
        <Card className={classes.cardTheme} variant='outlined'>
          <CardHeader
            title='Interactive CV'
            subheader='My Personal Website'
          />

          <CardMedia
            className={classes.cardImage}
            image='./images/website.jpg'
            title='The current website'
          />

          <CardContent>
            <Typography variant='body2'>
              My curriculum vitae... on the web! Built with React and Material-ui, hosted on GitHub Pages.
              You're here now!
            </Typography>
          </CardContent>

          <CardActions>
            <Box className={classes.cardActionBox}>
              <Link
                className={classes.cardLink}
                href='https://github.com/MasReed/personal-interactive-website'
                target='_blank'
                rel='noopener'
              >
                Github Repository
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Grid>

      {/* DataQuest Projects */}
      <Grid item xs={12} sm={4}>
        <Card className={classes.cardTheme} variant='outlined'>
          <CardHeader
            title='DataQuest Projects'
            subheader='Data Analysis in Python'
          />

          <CardMedia
            className={classes.cardImage}
            image='./images/dataquest.jpg'
            title='Data Analysis'
          />

          <CardContent>
            <Typography variant='body2'>
              Various data science projects from DataQuest's Data Analyst Path. Over 15 individual data analyses all within Python, documented with iPythonNotebook.
            </Typography>
          </CardContent>

          <CardActions>
            <Box className={classes.cardActionBox}>
              <Link
                className={classes.cardLink}
                href='https://github.com/MasReed/DataQuestProjects'
                target='_blank'
                rel='noopener'
              >
                Github Repository
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Grid>

      {/* AllSky */}
      <Grid item xs={12} sm={4}>
        <Card className={classes.cardTheme} variant='outlined'>
          <CardHeader
            title='AllSky'
            subheader='Astronomical Imaging Pipeline'
          />

          <CardMedia
            className={classes.cardImage}
            image='./images/allsky.png'
            title='AllSky Star Mapping'
          />

          <CardContent>
            <Typography variant='body2'>
              A Python software pipeline for overlaying
              astronomical coordinates on 360 degree field-of-
              view images of the night sky.
            </Typography>
          </CardContent>

          <CardActions>
            <Box className={classes.cardActionBox}>
              <Link
                className={classes.cardLink}
                href='https://github.com/MasReed/allsky_camera'
                target='_blank'
                rel='noopener'
              >
                Github Repository
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Grid>

      {/* Gravbox */}
      <Grid item xs={12} sm={4}>
        <Card className={classes.cardTheme} variant='outlined'>
          <CardHeader
            title='GravBox'
            subheader='Augmented Reality for Gravitaional Dynamics'
          />

          <CardMedia
            className={classes.cardImage}
            image='./images/Gravbox.png'
            title='Gravbox'
          />

          <CardContent>
            <Typography variant='body2'>
              An interactive AR experience to better understand
              gravitational dynamics. Used for public outreach
              and a first of its kind in the world. It was
              created with a team of undergraduate colleagues
              during Dr. Hai Fu's 2016-2017 Astrophysics I & II courses.
            </Typography>
          </CardContent>

          <CardActions>
            <Box className={classes.cardActionBox}>
              <Link
                className={classes.cardLink}
                href='http://astro.physics.uiowa.edu/gravbox'
                target='_blank'
                rel='noopener'
              >
                Website
              </Link>

              <Link
                className={classes.cardLink}
                href='https://github.com/jwisbell/gravity_sandbox'
                target='_blank'
                rel='noopener'
              >
                Github Repository
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}
