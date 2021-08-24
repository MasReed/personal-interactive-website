import React from 'react'

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'


export default function ProjectsContent() {
  return (
    <Box id='#about' m={0} p={0} >
      <Container>
        <Grid container spacing={3}>
          {/* Restaurant PoS */}
          <Grid item sm={4}>
            <h2>Restaurant Point of Sale</h2>
            <Box>
              <Link
                href='http://restaurant.monsed.com'
                target='_blank'
                rel='noopener'
              >
                Nodo-Manager
              </Link>
            </Box>
            <Box>
              <p>
                I love finding solutions! I'm a self-taught, full stack
                developer and masterful problem solver. My background is
                in astrophysics and I have experience in STEM education.
                I have a passion to learn new things and share them with
                others. I also enjoy multi-player, strategy
                games, such as Magic: the Gathering and Catan!
              </p>
            </Box>
          </Grid>

          {/* AllSky */}
          <Grid item sm={4}>
            <h2>AllSky</h2>
            <Box>
              <Link
                href='https://github.com/MasReed/allsky_camera'
                target='_blank'
                rel='noopener'
              >
                AllSky Repository
              </Link>
            </Box>
            <p class="card-text text-gray">
                A Python software pipeline for overlaying
                astronomical coordinates on 360 degree field-of-
                view images of the night sky.
            </p>

          </Grid>

          {/* Gravbox */}
          <Grid item sm={4}>
            <h2>GravBox</h2>
            <Box>
              <Link
                href='http://astro.physics.uiowa.edu/gravbox'
                target='_blank'
                rel='noopener'
              >
                Gravbox
              </Link>
            </Box>
            <p>
              An interactive AR experience to better understand
              gravitational dynamics. Used for public outreach
              and a first of its kind in the world. It was
              created with a team of undergraduate colleagues
              during Dr. Hai Fu's astrophysics course.
            </p>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
