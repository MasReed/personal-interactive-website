import React, { useEffect, useRef, useState } from 'react'

import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'

import Link from '@material-ui/core/Link'

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

const useStyles = makeStyles((theme) => ({
  fabNav: {
    position: 'fixed',
    right: '5%',
    bottom: '5%',
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
  const [nextSection, setNextSection] = useState(undefined)
  const [atBottom, setAtBottom] = useState(false)

  // Move to selected section on click
  const linkRef = useRef(null)
  const executeScroll = () => {
    linkRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  useEffect(() => {
    // Get href for next section by index in sections array
    const nextSectionIndex = sectionIds.indexOf(navLocation) + 1

    if (nextSectionIndex > 0) {
      const nextSectionRef = sectionIds[nextSectionIndex]

      if (!nextSectionRef) {
        setNextSection(sectionIds[0])
        setAtBottom(true)
      } else {
        setNextSection(nextSectionRef)
        setAtBottom(false)
      }
    } else {
      setNextSection(sectionIds[1])
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
      variant={useMediaQuery(theme.breakpoints.up('sm')) ? 'extended' : 'circular'}
      ref={linkRef}
      onClick={executeScroll}
    >
      {
        atBottom
          ? <KeyboardArrowUpIcon fontSize='large' />
          : <KeyboardArrowDownIcon fontSize='large' />
      }
      {
        useMediaQuery(theme.breakpoints.up('sm'))
        ? sectionInfo.find(section => section.id && section.id === nextSection)
          && sectionInfo.find(section => section.id && section.id === nextSection).title
        : null
      }
    </Fab>
  )
}
