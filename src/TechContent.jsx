import React from 'react'

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

export default function TechContent() {
  return (
    <Box style={{ color: '#f5cdaa'}}>
      <Container>
        <Grid container spacing={5}>
          <Grid item sm={3}>
            <h2>Languages</h2>
            <List style={{ color: '#EBF2FF'}}>
              <ListItem>
                Javascript/ECMAscript
              </ListItem>
              <ListItem>
                MongoDB Query Language (MQL)
              </ListItem>
              <ListItem>
                Python
              </ListItem>
              <ListItem>
                HTML/CSS
              </ListItem>
              <ListItem>
                SQL
              </ListItem>
            </List>
          </Grid>
          <Grid item sm={3}>
            <h2>Technologies</h2>
            <List style={{ color: '#EBF2FF'}}>
              <ListItem>Git & Github</ListItem>
              <ListItem>Bootstrap Framework</ListItem>
              <ListItem>Material-ui Framework</ListItem>
              <ListItem>jQuery</ListItem>
              <ListItem>Heroku</ListItem>
            </List>
          </Grid>
          <Grid item sm={3}>
            <h2>Utilities</h2>
            <List style={{ color: '#EBF2FF'}}>
              <ListItem>MS Office 365 Suite</ListItem>
              <ListItem>Teams/Zoom</ListItem>
              <ListItem>LaTeX</ListItem>
              <ListItem>Markdown</ListItem>
              <ListItem>Slack/Discord</ListItem>
            </List>
          </Grid>
          <Grid item sm={3}>
            <h2>Other</h2>
            <Box style={{ color: '#EBF2FF'}}>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </Box>
            <List style={{ color: '#EBF2FF'}}>
              <ListItem>Arduino</ListItem>
              <ListItem>Unreal Engine 4</ListItem>
              <ListItem>C++, RobotC</ListItem>
              <ListItem>FreeCAD</ListItem>
              <ListItem>VEX Robotics</ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
