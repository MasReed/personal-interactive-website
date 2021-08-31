import React, { useEffect, useRef } from 'react'

import Link from '@material-ui/core/Link'
import MenuItem from '@material-ui/core/MenuItem'

export default function NavLinkXL({
  navNode,
  navLocation,
  setNavLocation,
  activeClass,
  inactiveClass
}) {
  const linkRef = useRef(null)

  const executeScroll = () => {
    linkRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    const hashListener = () => {
      setNavLocation(window.location.hash)
    }
    window.addEventListener('hashchange', hashListener, false)

    return () => window.removeEventListener('hashchange', hashListener)
  })

  return (
    <MenuItem
      className={ navNode.id === window.location.hash ? activeClass : inactiveClass }
      component={Link}
      href={navNode.id}
      onClick={executeScroll}
      ref={linkRef}
    >
      {navNode.title}
    </MenuItem>
  )
}
