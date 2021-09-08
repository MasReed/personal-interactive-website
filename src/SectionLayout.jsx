import React, { useEffect, useRef } from 'react'
import useOnScreen from './hooks/useOnScreen'

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  contentSpacingStyle: {
    margin: '3rem 0',
    padding: '0 2rem',
    [theme.breakpoints.down('sm')]: {
      margin: '1rem 0',
      padding: '0',
    },
  },
  headingStyle: {
    color: props => props.color,
    margin: '0',
    padding: '2rem 0',
    textAlign: 'center',
  },
  hrSpacingStyle: {
    padding: '1rem 0',
    margin: '0'
  },
  sectionStyle: {
    backgroundColor: props => props.backgroundColor,
    margin: 0,
    padding: '6rem 0',
    [theme.breakpoints.down('sm')]: {
      padding: '1rem 0',
    }
  }
}))

export default function SectionLayout({ children, id, sectionHeader, ...props }) {
  const theme = useTheme()
  const classes = useStyles(props, theme)

  const sectionRef = useRef()
  const onScreen = useOnScreen(sectionRef, '-200px')

  useEffect(() => {
    if (onScreen) {
      // window.history.pushState({ ...window.history.state }, '', `#${id}`)
      window.location.href = `#${id}` // triggers hashchange event needed by NavLinkXL
    }
  }, [id, onScreen])

  return (
    <>
      <Box id={id} ref={sectionRef} className={classes.sectionStyle}>
        <Container>
          <Typography variant={'h2'} className={classes.headingStyle}>
            {sectionHeader}
          </Typography>

          <Box className={classes.hrSpacingStyle}>
            <Divider />
          </Box>

          <Box className={classes.contentSpacingStyle}>
            {children}
          </Box>

          <Box className={classes.hrSpacingStyle}>
            <Divider />
          </Box>
        </Container>
      </Box>
    </>
  )
}
