import React from 'react'

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

export default function TechContent() {
  return (
    <Box style={{ color: '#f5cdaa'}}>
      <Container>
        <Grid container spacing={5}>
          <Grid item sm={3}>
            <h2>Languages</h2>
            <Box style={{ color: '#EBF2FF'}}>
              <p>Javascript/ECMAscript</p>
              <p>MongoDB Query Language (MQL)</p>
              <p>Python</p>
              <p>HTML/CSS</p>
              <p>SQL</p>
            </Box>
          </Grid>
          <Grid item sm={3}>
            <h2>Technologies</h2>
            <Box style={{ color: '#EBF2FF'}}>
              <p>Git & Github</p>
              <p>Bootstrap Framework</p>
              <p>Material-ui Framework</p>
              <p>jQuery</p>
              <p>Heroku</p>
            </Box>
          </Grid>
          <Grid item sm={3}>
            <h2>Utilities</h2>
            <Box style={{ color: '#EBF2FF'}}>
              <p>MS Office 365 Suite</p>
              <p>Teams/Zoom</p>
              <p>LaTeX</p>
              <p>Markdown</p>
              <p>Slack/Discord</p>
            </Box>
          </Grid>
          <Grid item sm={3}>
            <h2>Other</h2>
            <Box style={{ color: '#EBF2FF'}}>
              <p>Arduino</p>
              <p>Unreal Engine 4</p>
              <p>C++, RobotC</p>
              <p>FreeCAD</p>
              <p>VEX Robotics</p>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
