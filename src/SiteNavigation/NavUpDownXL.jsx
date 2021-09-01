import React, { useEffect, useRef, useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import MenuItem from '@material-ui/core/MenuItem'

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

const useStyles = makeStyles((theme) => ({
  buttonStyle: {
    
  }
}))

export default function NavUpDownXL({ sections, navLocation }) {
  const theme = useTheme()
  const classes = useStyles(theme)

  const sectionIds = sections.map(section => section.id)
  const [nextSection, setNextSection] = useState('')
  const [atBottom, setAtBottom] = useState(false)

  const linkRef = useRef(null)

  const executeScroll = () => {
    linkRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    const nextSectionIndex = sectionIds.indexOf(navLocation) + 1
    const nextSectionRef = sectionIds[nextSectionIndex]

    console.log('useEffectNextSection', nextSectionRef)

    if (!nextSectionRef) {
      setNextSection('#top')
      setAtBottom(true)
    } else {
      setNextSection(nextSectionRef)
      setAtBottom(false)
    }

  }, [sectionIds, navLocation])

  return (
    <MenuItem
      className={classes.buttonStyle}
      component={Link}
      href={nextSection}
      onClick={executeScroll}
      ref={linkRef}
    >
      <Box display='flex' flexGrow={1} justifyContent='center'>
        {
          atBottom
            ? <KeyboardArrowUpIcon fontSize='large' />
            : <KeyboardArrowDownIcon fontSize='large' />
        }
      </Box>
    </MenuItem>
  )
}
