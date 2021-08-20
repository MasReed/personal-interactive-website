import React from 'react'

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'

export default function EducationContent() {
  return (
    <Box>
      <Container>
        {/* FullStackOpen Education */}
        <Grid container spacing={5}>
          <Grid item sm={4}>
            <Box>
              <h3>FullStackOpen</h3>
              <p>March 2021 - Present</p>
            </Box>
          </Grid>
          <Grid item sm={8}>
            <Box>
                <h5>An introduction to modern web application development with JavaScript</h5>
                <p>
                  Single page applications with ReactJS that use REST APIs built with Node.js.
                  This covered testing, configuration and environment management, and the use of
                  MongoDB for storing the application’s data. The course content is the same as
                  in the Full stack course held at the Department of Computer Science at the
                  University of Helsinki in Spring 2020.
                </p>
                <Link href='https://fullstackopen.com/en/about/'>FullStackOpen</Link>
            </Box>
          </Grid>
        </Grid>

        {/* Udemy Education */}
        <Grid container spacing={5}>
          <Grid item sm={4}>
            <Box>
              <h3>Udemy</h3>
              <p>Jan 2021 - March 2021</p>
            </Box>
          </Grid>
          <Grid item sm={8}>
            <Box>
              <h5>The Complete 2021 Web Development Bootcamp</h5>
              <p>HTML5, CSS3, Bootstrap4, JavaScript, jQuery</p>
              <Link href='https://www.udemy.com/course/the-complete-web-development-bootcamp/'>Udemy Course</Link>
            </Box>
          </Grid>
        </Grid>

        {/* DataQuest Education */}
        <Grid container spacing={5}>
          <Grid item sm={4}>
            <Box>
              <h3>DataQuest</h3>
              <p>Oct 2020 - Dec 2020</p>
            </Box>
          </Grid>
          <Grid item sm={8}>
            <Box>
              <h5>Data Analyst in Python</h5>
              <p>Python, pandas, SQL</p>
              <Link href='https://www.dataquest.io/path/data-analyst/'>Data Analyst Path</Link>
            </Box>
          </Grid>
        </Grid>

        {/* U Iowa Education */}
        <Grid container spacing={5}>
          <Grid item sm={4}>
            <Box>
              <h3>University of Iowa</h3>
              <p>Aug 2013 - May 2018</p>
            </Box>
          </Grid>
          <Grid item sm={8}>
            <Box>
              <h5>Bachelors of Science - Astronomy; Physics</h5>
              <p>Python, numpy, matplotlib, astropy, HTML, CSS</p>
              <Link href='https://physics.uiowa.edu/undergraduate/bs-astronomy'>Dept. of Physics and Astronomy</Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
