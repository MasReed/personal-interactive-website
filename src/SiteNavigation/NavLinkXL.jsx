import React, { useRef } from 'react'

import Link from '@material-ui/core/Link'
import MenuItem from '@material-ui/core/MenuItem'

export default function NavLinkXL({ navNode, activeClass, inactiveClass }) {
  const linkRef = useRef(null)

  const executeScroll = () => {
    linkRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

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
