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
    '&:active': {
      backgroundColor: theme.palette.cream.main,
      color: theme.palette.primary.main,
    }
  },
}))

export default function NavLG() {
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

  const sectionIds = sectionInfo.map(section => section.id)
  const [nextSection, setNextSection] = useState('')
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
      setNextSection('#top')
      setAtBottom(true)
    } else {
      setNextSection(nextSectionRef)
      setAtBottom(false)
    }

  }, [sectionIds, navLocation])


  // Handles EventListener for changes to location.hash
  useEffect(() => {
    const hashListener = () => {
      setNavLocation(window.location.hash)
    }
    window.addEventListener('hashchange', hashListener, false)

    return () => window.removeEventListener('hashchange', hashListener)
  }, [])

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
      {nextSection}
    </Fab>
  )
}
