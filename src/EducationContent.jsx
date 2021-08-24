import React from 'react'

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'

import theme from './theme'
import education from './content/education.json'

const useStyles = makeStyles({
  dateText: {
    color: theme.palette.cream.main
  },
  eduInstitute: {
    color: theme.palette.cream.main
  },
  eduTitle: {
    color: theme.palette.orange.main
  },
  eduDetails: {
    color: theme.palette.white.main
  }
})


export default function EducationContent() {
  const classes = useStyles()

  console.log(education)

  return (
    <Box>
      <Container>
        {/* FullStackOpen Education */}
        <Grid container spacing={0}>
          <Grid item sm={4}>
            <Box >
              <Typography className={classes.eduInstitute} variant={'subtitle1'}>
                <strong>{education[0].institute}</strong>
              </Typography>
              <Typography className={classes.dateText} variant={'body2'}>
                {education[0].dates}
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={8}>
            <Box>
                <Typography className={classes.eduTitle} variant={'h6'}>
                  {education[0].titles[0].title}
                </Typography>
                <Typography className={classes.eduDetails} variant={'body2'}>
                  {education[0].titles[0].description}
                </Typography>
                <Link href='https://fullstackopen.com/en/about/'>FullStackOpen</Link>
            </Box>
          </Grid>
        </Grid>

        {/* Udemy Education */}
        <Grid container spacing={0}>
          <Grid item sm={4}>
            <Box>
              <h3>Udemy</h3>
              <p>Jan 2021 - March 2021</p>
            </Box>
          </Grid>
          <Grid item sm={8}>
            <Box>
              <h4>The Complete 2021 Web Development Bootcamp</h4>
              <p>HTML5, CSS3, Bootstrap4, JavaScript, jQuery</p>
              <Link href='https://www.udemy.com/course/the-complete-web-development-bootcamp/'>Udemy Course</Link>
            </Box>
          </Grid>
        </Grid>

        {/* DataQuest Education */}
        <Grid container spacing={0}>
          <Grid item sm={4}>
            <Box>
              <h3>DataQuest</h3>
              <p>Oct 2020 - Dec 2020</p>
            </Box>
          </Grid>
          <Grid item sm={8}>
            <Box>
              <h4>Data Analyst in Python</h4>
              <p>Python, pandas, SQL</p>
              <Link href='https://www.dataquest.io/path/data-analyst/'>Data Analyst Path</Link>
            </Box>
          </Grid>
        </Grid>

        {/* U Iowa Education */}
        <Grid container spacing={0}>
          <Grid item sm={4}>
            <Box>
              <h3>University of Iowa</h3>
              <p>Aug 2013 - May 2018</p>
            </Box>
          </Grid>
          <Grid item sm={8}>
            <Box>
              <h4>Bachelors of Science - Astronomy; Physics</h4>
              <p>Python, numpy, matplotlib, astropy, HTML, CSS</p>
              <Link href='https://physics.uiowa.edu/undergraduate/bs-astronomy'>Dept. of Physics and Astronomy</Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
