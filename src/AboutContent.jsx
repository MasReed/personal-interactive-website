import React from 'react'

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'


export default function AboutContent() {
  return (
    <Box id='#about' m={0} p={0} >
      <Container>
        <Grid container spacing={3}>
          {/* About Me Statement */}
          <Grid item sm={4}>
            <h2>About Me</h2>
            <Box>
              <p>
                I love finding solutions! I am a full stack
                developer and masterful problem solver. My background is
                in astrophysics and I have experience in STEM education.
                I have a passion to learn new things and share them with
                others. I also enjoy multiplayer strategy
                games, such as Magic: the Gathering and Catan!
              </p>
            </Box>
          </Grid>

          {/* Headshot Image */}
          <Grid item sm={4}>
            <img src='images/headshot3.jpg' alt='Masons headshot'
              style={{ maxHeight: '100%', width: '100%', borderRadius: '3%' }}/>
          </Grid>

          {/* About Me Facts */}
          <Grid item sm={4}>
            <h2>Details</h2>
            <Box>
              <h4>Name:</h4>
              <p>Mason Reed</p>
            </Box>
            <Box>
              <h4>Location:</h4>
              <p>Milwaukee, WI - USA</p>
            </Box>
            <Box>
              <h4>Pets</h4>
              <p>Yes</p>
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
