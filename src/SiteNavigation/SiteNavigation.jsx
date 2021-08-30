import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import NavXL from './NavXL'

export default function SiteNavigation() {
  const theme = useTheme()
  const screenXL = useMediaQuery(theme.breakpoints.up('xl'))

  return (
    screenXL ? <NavXL /> : null
  )
}
