import React from 'react'

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'

export default function PageFooter () {
  return (
    <footer>
      <Box m={0} py={5} bgcolor='#f5cdaa'>
        <Container>
          <Grid container spacing={5}>
            {/* Site Map */}
            <Grid item xs={12} sm={4}>
              <Box pt={2} borderBottom={1}>
                <p>Site Map</p>
              </Box>
              <Box pt={2}>
                <Link
                  href='www.monsed.com'
                  color='inherit'
                  target='_blank'
                  rel='noopener'
                >
                  Home
                </Link>
              </Box>
              <Box pt={2}>
                <Link
                  href='restaurant.monsed.com'
                  color='inherit'
                  target='_blank'
                  rel='noopener'
                >
                  Nodo-Manager
                </Link>
              </Box>
            </Grid>

            {/* CV Sections */}
            <Grid item xs={12} sm={4}>
              <Box pt={2} borderBottom={1}>
                <p>Sections</p>
              </Box>
              <Box pt={2}>
                <Link href='#top' color='inherit'>
                  To Top
                </Link>
              </Box>
              <Box pt={2}>
                <Link href='#about' color='inherit'>
                  About
                </Link>
              </Box>
              <Box pt={2}>
                <Link href='#other' color='inherit'>
                  Others?
                </Link>
              </Box>
            </Grid>

            {/* About This Site */}
            <Grid item xs={12} sm={4}>
              <Box pt={2} borderBottom={1}>
                <p>About This Site</p>
              </Box>
              <Box pt={2}>
                Whats with the name?
              </Box>
              <Box pt={2}>
                <Link
                  href='http://www.github.com/MasReed/personal-interactive-website'
                  color='inherit'
                  target='_blank'
                  rel='noopener'
                >
                  Github
                </Link>
              </Box>
              <Box>
                <p>Mostly coded during an 8hr roadtrip to Ohio</p>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign='center' mt={3} mb={0} pt={9} pb={2}>
            MasReed &reg; { new Date().getFullYear() }
          </Box>
        </Container>
      </Box>
    </footer>
  )
}
