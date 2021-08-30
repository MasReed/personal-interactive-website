import React from 'react'

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

// import { makeStyles } from '@material-ui/core/styles'
//
// const useStyles = makeStyles({
// })

export default function SectionLayout({ children, id, sectionHeader, ...props }) {
  // const classes = useStyles()

  const headingStyle = {
    fontSize: '3.175rem',
    fontWeight: 'normal',
    letterSpacing: '1px',
    margin: '0 0 2rem 0',
    padding: '2rem 0',
    textAlign: 'center',
    lineHeight: 1.2,
    color: props.color,
  }

  const hrLineStyle = {
    border: 0,
    borderColor: '#49464D',
    borderTop: '1px solid rgba(0, 0, 0, 0.2)',
  }

  const hrSpacingStyle = {
    padding: '25px 0',
    margin: '1rem 0'
  }

  const sectionStyle = {
    backgroundColor: props.backgroundColor,
    margin: 0,
    padding: '5rem 0'
  }

  return (
    <>
      <Box id={id} style={sectionStyle}>
        <Container>
          <Typography variant={'h3'} style={headingStyle}>
            {sectionHeader}
          </Typography>
          <Box style={hrSpacingStyle}>
            <hr style={hrLineStyle} />
          </Box>

          {children}

          <Box style={hrSpacingStyle}>
            <hr style={hrLineStyle} />
          </Box>
        </Container>
      </Box>
    </>
  )
}
