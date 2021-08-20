import React from 'react'

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'

export default function SectionLayout({ children, sectionHeader, ...props }) {
  const headingStyle = {
    fontFamily: '"Roboto Slab", serif',
    fontSize: '3.175rem',
    fontWeight: 'normal',
    letterSpacing: '1px',
    margin: '20px 0',
    textAlign: 'center',
    lineHeight: 1.2,
    color: props.color,
  }

  const hrStyle = {
    border: 0,
    borderColor: '#49464D',
    borderTop: '1px solid rgba(0, 0, 0, 0.2)',
  }

  const sectionStyle = {
    backgroundColor: props.backgroundColor,
    margin: 0,
    padding: '50px'
  }

  return (
    <Box style={sectionStyle}>
      <Container>
        <h2 style={headingStyle}>{sectionHeader}</h2>
        <Box style={{ padding: '25px 0' }}>
          <hr style={hrStyle} />
        </Box>

        {children}

        <Box style={{ padding: '25px 0' }}>
          <hr style={hrStyle} />
        </Box>
      </Container>
    </Box>
  )
}
