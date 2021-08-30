import React, { useRef } from 'react'

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
    linkRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    setNavLocation(navNode.id)
  }

  return (
    <MenuItem
      className={ navLocation === navNode.id ? activeClass : inactiveClass }
      component={Link}
      href={navNode.id}
      onClick={executeScroll}
      ref={linkRef}
    >
      {navNode.title}
    </MenuItem>
  )
}
