import React, { useState } from 'react'

import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import Paper from '@material-ui/core/Paper'

import { makeStyles } from '@material-ui/core/styles'
import theme from '../theme'

import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles({
  navPosition: {
    position: 'fixed',
    right: '5%',
    top: '22%',
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
})

export default function NavXL() {
  const classes = useStyles()
  const desktopView = useMediaQuery(theme.breakpoints.up('xl'))
  const [navLocation, setNavLocation] = useState('#about')

  return (
    <Box className={classes.navPosition}>
      <Paper className={classes.navColor} variant='outlined'>
        <MenuList>
          {/* ABOUT LINK */}
          <MenuItem
            className={ navLocation === '#about' ? classes.navActive : classes.navInactiveHover }
            component={Link}
            href='#about'
            onClick={() => setNavLocation('#about')}
          >
            About
          </MenuItem>

          {/* SKILLS LINK */}
          <MenuItem
            className={ navLocation === '#tech-skills' ? classes.navActive : classes.navInactiveHover }
            component={Link}
            href='#tech-skills'
            onClick={() => setNavLocation('#tech-skills')}
          >
            Skills
          </MenuItem>

          {/* PROJECTS LINK */}
          <MenuItem
            className={ navLocation === '#projects' ? classes.navActive : classes.navInactiveHover }
            component={Link}
            href='#projects'
            onClick={() => setNavLocation('#projects')}
          >
            Projects
          </MenuItem>

          {/* EDUCATION LINK */}
          <MenuItem
            className={ navLocation === '#education' ? classes.navActive : classes.navInactiveHover }
            component={Link}
            href='#education'
            onClick={() => setNavLocation('#education')}
          >
            Education
          </MenuItem>

          {/* EXPERIENCE LINK */}
          <MenuItem
            className={ navLocation === '#experience' ? classes.navActive : classes.navInactiveHover }
            component={Link}
            href='#experience'
            onClick={() => setNavLocation('#experience')}
          >
            Experience
          </MenuItem>

          {/* CONTACT LINK */}
          <MenuItem
            className={ navLocation === '#contact' ? classes.navActive : classes.navInactiveHover }
            component={Link}
            href='#contact'
            onClick={() => setNavLocation('#contact')}
          >
            Contact
          </MenuItem>

        </MenuList>
      </Paper>
    </Box>
  )
}
