import React from 'react'

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
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    boxShadow: theme.shadows[24],
    padding: '1rem',
    '&:hover': {
      backgroundColor: theme.palette.white.main,
      border: '0.0125rem solid',
      borderColor: theme.palette.text.primary,
      color: theme.palette.primary.main,
      padding: '1.15rem 1rem',
    }
  },
  navInactive: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.cream.main,
    padding: '1rem',
    '&:hover': {
      backgroundColor: theme.palette.white.main,
      border: '0.0125rem solid',
      borderColor: theme.palette.text.primary,
      color: theme.palette.primary.main,
      padding: '1.15rem 1rem',
    }
  },
  bumpDivider: {
    backgroundColor: theme.palette.primary.main,
    height: '.125rem'
  }
}))

export default function NavXL({ sectionInfo, navLocation, setNavLocation }) {
  const theme = useTheme()
  const classes = useStyles(theme)

  return (
    <Box className={classes.navPosition} zIndex='tooltip'>
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
