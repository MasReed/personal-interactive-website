import React, { useEffect, useRef, useState } from 'react'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'

import Link from '@material-ui/core/Link'

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

const useStyles = makeStyles((theme) => ({
  fabNav: {
    position: 'fixed',
    right: '5%',
    top: '85%',
    color: theme.palette.primary.main,
    border: '0.0125rem solid',
    borderColor: theme.palette.primary.main,
    boxShadow: theme.shadows[24],
    zIndex: 1000,
    '&:active': {
      backgroundColor: theme.palette.cream.main,
      color: theme.palette.primary.main,
    },
    '&:hover': {
      backgroundColor: theme.palette.cream.main
    },
  },
}))

export default function NavLG({ sectionInfo, navLocation, setNavLocation }) {
  const theme = useTheme()
  const classes = useStyles(theme)

  const sectionIds = sectionInfo.map(section => section.id)
  const [nextSection, setNextSection] = useState(window.location.hash)
  const [atBottom, setAtBottom] = useState(false)

  // Move to selected section on click
  const linkRef = useRef(null)
  const executeScroll = () => {
    linkRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    // Get href for next section by index in sections array
    const nextSectionIndex = sectionIds.indexOf(navLocation) + 1
    const nextSectionRef = sectionIds[nextSectionIndex]

    if (!nextSectionRef) {
      setNextSection(sectionIds[0])
      setAtBottom(true)
    } else {
      setNextSection(nextSectionRef)
      setAtBottom(false)
    }

  }, [sectionIds, navLocation])

  return (
    <Fab
      aria-label='navigate'
      className={classes.fabNav}
      color='secondary'
      component={Link}
      href={nextSection}
      variant='extended'
      ref={linkRef}
      onClick={executeScroll}
    >
      {
        atBottom
          ? <KeyboardArrowUpIcon fontSize='large' />
          : <KeyboardArrowDownIcon fontSize='large' />
      }
      {sectionInfo.find(section => section.id !== '' && section.id === nextSection).title}
    </Fab>
  )
}
