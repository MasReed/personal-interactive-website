import React from 'react'

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'

export default function SectionLayout({ children, sectionHeader }) {
  const headingStyle = {
      fontFamily: '"Roboto Slab", serif',
      fontSize: '3.175rem',
      fontWeight: 'normal',
      letterSpacing: '1px',
      margin: '20px',
      textAlign: 'center',
      lineHeight: 1.2,

  }

  const hrStyle = {
    border: 0,
    borderColor: '#49464D',
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    margin: '60px 0',
  }

  return (
    <Box>
      <Container>
        <h2 style={headingStyle}>{sectionHeader}</h2>
        <hr style={hrStyle} />
        {children}
        <hr style={hrStyle} />
      </Container>
    </Box>
  )
}
