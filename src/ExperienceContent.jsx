import React from 'react'

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'

export default function ExperienceContent() {
  return (
    <Box>
      <Container>
        {/* Discovery World Experience */}
        <Grid container spacing={5}>
          <Grid item sm={4}>
            <Box>
              <h3>Discovery World | Science + Technology Museum</h3>
              <h4 style={{ color: '#49464d' }}>
                April 2019 - October 2020
              </h4>
            </Box>
          </Grid>
          <Grid item sm={8}>
            <Box>
              <h2>Robotics Educator</h2>
              <h4>
                An experience in STEM outreach and education that included curriculum development,
                remote content delivery, and leading professional development seminars. Introductory
                programming in Python, Arduino, and RobotC necessitated strong student-mentor
                communication.
              </h4>
            </Box>
          </Grid>
        </Grid>

        {/* Undergraduate Experience */}
        <Grid container spacing={5}>
          <Grid item sm={4}>
            <Box>
              <h3>University of Iowa | Department of Physics and Astronomy</h3>
              <h4>May 2017 - June 2018</h4>
            </Box>
          </Grid>
          <Grid item sm={8}>
            <Box>
              <h2>Research Assistant</h2>
              <h4>
                Created the world's first augmented reality (AR) sandbox for gravitational
                dynamics, dubbed 'Gravbox'. It was adapted from a project on real-time water
                flow simulation and was written in Python along side undergraduate colleagues.
                This research project incepted a love for programming, development, and teamwork.
              </h4>
              <Link href='http://astro.physics.uiowa.edu/gravbox'>Gravbox</Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
