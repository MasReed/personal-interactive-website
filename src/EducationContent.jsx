import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

import education from './content/education.json'

const useStyles = makeStyles((theme) => ({
  dateText: {
    color: theme.palette.white.main
  },
  dividerStyle: {
    backgroundColor: theme.palette.orange.main,
    opacity: '50%'
  },
  eduDetails: {
    color: theme.palette.white.main
  },
  eduInstitute: {
    color: theme.palette.cream.main
  },
  eduLink: {
    color: theme.palette.cream.main
  },
  eduTile: {
    padding: '1.25rem 0'
  },
  eduTitle: {
    color: theme.palette.orange.main
  },
}))

export default function EducationContent() {
  const theme = useTheme()
  const classes = useStyles(theme)

  return (
    <>
      {
        education.map(entry => (
          <Box key={entry.institute} className={classes.eduTile}>
            <Grid container spacing={0}>
              <Grid item sm={4}>
                <Box display='flex' flexDirection='column' height='100%' justifyContent='space-between'>
                  <Box>
                    <Typography className={classes.eduInstitute} variant={'subtitle1'}>
                      <strong>{entry.institute}</strong>
                    </Typography>
                    <Typography className={classes.dateText} variant={'body2'}>
                      {entry.dates}
                    </Typography>
                  </Box>
                  <Box height='100%' py={1} pl={1}>
                    <Divider className={classes.dividerStyle} orientation='vertical' />
                  </Box>
                </Box>
              </Grid>
              <Grid item sm={8}>
                {
                  entry.titles.map(title => (
                    <Box key={title.title}>
                    <Typography className={classes.eduTitle} variant={'h6'}>
                      {title.title}
                    </Typography>
                    <Typography className={classes.eduDetails} variant={'body2'}>
                      {title.description}
                    </Typography>
                    <Link
                      className={classes.eduLink}
                      href={title.link.href}
                      target='_blank'
                      rel='noopener'
                      variant='overline'
                    >
                      {title.link.text}
                    </Link>
                    </Box>
                  ))
                }
              </Grid>
            </Grid>
          </Box>
        ))
      }
    </>
  )
}
