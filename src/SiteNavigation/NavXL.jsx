import React, { useEffect, useState } from 'react'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import MenuList from '@material-ui/core/MenuList'
import Paper from '@material-ui/core/Paper'

import NavLinkXL from './NavLinkXL'
import NavUpDownXL from './NavUpDownXL'

const useStyles = makeStyles((theme) => ({
  navPosition: {
    position: 'fixed',
    right: '5%',
    top: '28%',
  },
  navColor: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.cream.main,
  },
  navActive: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.primary.dark,
    boxShadow: theme.shadows[24],
    padding: '1rem',
    '&:hover': {
      backgroundColor: theme.palette.white.main,
      color: theme.palette.primary.dark,
      padding: '1.15rem 1rem',
    }
  },
  navInactive: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.cream.main,
    padding: '1rem',
    '&:hover': {
      backgroundColor: theme.palette.white.main,
      color: theme.palette.primary.dark,
      padding: '1.15rem 1rem',
    }
  },
  bumpDivider: {
    backgroundColor: theme.palette.primary.main,
    height: '.125rem'
  }
}))

export default function NavXL() {
  const theme = useTheme()
  const classes = useStyles(theme)
  const [navLocation, setNavLocation] = useState('')

  // id is used as href, title used as navigation text
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

  // Handles EventListener for changes to location.hash
  useEffect(() => {
    const hashListener = () => {
      setNavLocation(window.location.hash)
    }
    window.addEventListener('hashchange', hashListener, false)

    return () => window.removeEventListener('hashchange', hashListener)
  }, [])

  return (
    <Box className={classes.navPosition}>
      <Paper className={classes.navColor} elevation={24} variant='elevation'>
        <MenuList>
          <NavUpDownXL
            sections={sectionInfo}
            navLocation={navLocation}
          />
          <Divider className={classes.bumpDivider} />
          {
            sectionInfo.map(section => (
              <NavLinkXL
                key={section.id}
                navNode={section}
                activeClass={classes.navActive}
                inactiveClass={classes.navInactive}
              />
            ))
          }
        </MenuList>
      </Paper>
    </Box>
  )
}
