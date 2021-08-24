import React from 'react'

import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'

import theme from './theme'
import education from './content/education.json'

const useStyles = makeStyles({
  dateText: {
    color: theme.palette.white.main
  },
  eduInstitute: {
    color: theme.palette.cream.main
  },
  eduTitle: {
    color: theme.palette.orange.main
  },
  eduDetails: {
    color: theme.palette.white.main
  },
  eduTile: {
    padding: '1.25rem 1.75rem'
  }
})


export default function EducationContent() {
  const classes = useStyles()

  return (
    <Box>
      {
        education.map(entry => (
          <Box className={classes.eduTile}>
            <Grid container spacing={0}>
              <Grid item sm={4}>
                <Box>
                  <Typography className={classes.eduInstitute} variant={'subtitle1'}>
                    <strong>{entry.institute}</strong>
                  </Typography>
                  <Typography className={classes.dateText} variant={'body2'}>
                    {entry.dates}
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={8}>
                <Box>
                  {
                    entry.titles.map(title => (
                      <>
                      <Typography className={classes.eduTitle} variant={'h6'}>
                        {title.title}
                      </Typography>
                      <Typography className={classes.eduDetails} variant={'body2'}>
                        {title.description}
                      </Typography>
                      <Link
                        color='textPrimary'
                        href={title.link.href}
                        target='_blank'
                        rel='noopener'
                        variant='overline'
                      >
                        {title.link.text}
                      </Link>
                      </>
                    ))
                  }
                </Box>
              </Grid>
            </Grid>
          </Box>
        ))
      }
    </Box>
  )
}
