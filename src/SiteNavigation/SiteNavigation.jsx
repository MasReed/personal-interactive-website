import React, { useEffect, useState } from 'react'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import NavLG from './NavLG'
import NavXL from './NavXL'

export default function SiteNavigation() {
  const theme = useTheme()
  const screenXL = useMediaQuery(theme.breakpoints.up('xl'))

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
    screenXL
      ? <NavXL
        sectionInfo={sectionInfo}
        navLocation={navLocation}
        setNavLocation={setNavLocation}
      />
      : <NavLG
        sectionInfo={sectionInfo}
        navLocation={navLocation}
        setNavLocation={setNavLocation}
      />
  )
}
