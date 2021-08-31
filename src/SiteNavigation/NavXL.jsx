import React, { useState } from 'react'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import MenuList from '@material-ui/core/MenuList'
import Paper from '@material-ui/core/Paper'

import NavLinkXL from './NavLinkXL'

const useStyles = makeStyles((theme) => ({
  navPosition: {
    position: 'fixed',
    right: '5%',
    top: '28%',
  },
  navColor: {
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.cream.main,
    color: theme.palette.cream.main,
  },
  navActive: {
    backgroundColor: theme.palette.orange.main,
    color: theme.palette.primary.main,
    padding: '1rem',
    '&:hover': {
      backgroundColor: theme.palette.orange.main,
      color: theme.palette.primary.main,
    }
  },
  navInactiveHover: {
    padding: '1rem',
    '&:hover': {
      backgroundColor: theme.palette.white.main,
      color: theme.palette.primary.main,
    }
  }
}))

export default function NavXL() {
  const theme = useTheme()
  const classes = useStyles(theme)
  const [navLocation, setNavLocation] = useState('')

  const sectionInfo = [
    {
      id: '#about',
      title: 'About'
    },
    {
      id: '#tech-skills',
      title: 'Skills'
    },
    {
      id: '#projects',
      title: 'Projects'
    },
    {
      id: '#education',
      title: 'Education'
    },
    {
      id: '#experience',
      title: 'Experience'
    },
    {
      id: '#contact',
      title: 'Contact'
    },
  ]

  return (
    <Box className={classes.navPosition}>
      <Paper className={classes.navColor} variant='outlined'>
        <MenuList>
          {
            sectionInfo.map(section => (
              <NavLinkXL
                key={section.id}
                navNode={section}
                navLocation={navLocation}
                setNavLocation={setNavLocation}
                activeClass={classes.navActive}
                inactiveClass={classes.navInactiveHover}
              />
            ))
          }
        </MenuList>
      </Paper>
    </Box>
  )
}
