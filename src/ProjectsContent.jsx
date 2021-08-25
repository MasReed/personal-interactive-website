import React from 'react'

import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'


export default function ProjectsContent() {
  return (
    <Box id='#about' m={0} p={0} >
      <Container>
        <Grid container spacing={3}>
          {/* Restaurant PoS */}
          <Grid item sm={4}>
            <Card variant='outlined'>
              <CardHeader
                title='Nodo Manager'
                subheader='Restaurant Point of Sale'
              />

              <CardMedia
                image='./images/nodoScreenshot.jpg'
                title='Project title'
                style={{height: 0, paddingTop: '56.25%'}}
              />

              <CardContent>
                <Typography variant='body2'>
                  An app similar to GrubHub or DoorDash, but also used to manage your restaurant! Built with a full MERN stack and usable by both sellers and consumers. This is my first independent web application.
                </Typography>
              </CardContent>

              <CardActions>
                <Link
                  href='http://restaurant.monsed.com'
                  target='_blank'
                  rel='noopener'
                >
                  Heroku
                </Link>

                <Link
                  href='https://github.com/MasReed/Nodo-Manager'
                  target='_blank'
                  rel='noopener'
                >
                  Github Repository
                </Link>
              </CardActions>
            </Card>
          </Grid>

          {/* Personal Website */}
          <Grid item sm={4}>
            <Card variant='outlined'>
              <CardHeader
                title='Iteractive CV'
                subheader='My Personal Websites'
              />

              <CardMedia
                image='./images/website.jpg'
                title='this website'
                style={{height: 0, paddingTop: '56.25%'}}
              />

              <CardContent>
                <Typography variant='body2'>
                  My curriculum vitae... on the web! Built with React and Material-ui, hosted on GitHub Pages.
                  You're here now!
                </Typography>
              </CardContent>

              <CardActions>
                <Link
                  href='https://github.com/MasReed/personal-interactive-website'
                  target='_blank'
                  rel='noopener'
                >
                  Github Repository
                </Link>
              </CardActions>
            </Card>
          </Grid>

          {/* AllSky */}
          <Grid item sm={4}>
            <Card variant='outlined'>
              <CardHeader
                title='AllSky'
                subheader='Astronomical Imaging Pipeline'
              />

              <CardMedia
                image='./images/allsky.png'
                title='Project title'
                style={{height: 0, paddingTop: '56.25%'}}
              />

              <CardContent>
                <Typography variant='body2'>
                  A Python software pipeline for overlaying
                  astronomical coordinates on 360 degree field-of-
                  view images of the night sky.
                </Typography>
              </CardContent>

              <CardActions>
                <Link
                  href='https://github.com/MasReed/allsky_camera'
                  target='_blank'
                  rel='noopener'
                >
                  Github Repository
                </Link>
              </CardActions>
            </Card>
          </Grid>

          {/* Gravbox */}
          <Grid item sm={4}>
            <Card variant='outlined'>
              <CardHeader
                title='GravBox'
                subheader='Augmented Reality for Gravitaional Dynamics'
              />

              <CardMedia
                image='./images/Gravbox.png'
                title='Gravbox'
                style={{height: 0, paddingTop: '56.25%'}}
              />

              <CardContent>
                <Typography variant='body2'>
                  An interactive AR experience to better understand
                  gravitational dynamics. Used for public outreach
                  and a first of its kind in the world. It was
                  created with a team of undergraduate colleagues
                  during Dr. Hai Fu's astrophysics course.
                </Typography>
              </CardContent>

              <CardActions>
                <Link
                  href='http://astro.physics.uiowa.edu/gravbox'
                  target='_blank'
                  rel='noopener'
                >
                  Gravbox Website
                </Link>

                <Link
                  href='https://github.com/jwisbell/gravity_sandbox'
                  target='_blank'
                  rel='noopener'
                >
                  Github Repository
                </Link>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
