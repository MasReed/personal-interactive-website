import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
// import Typography from '@material-ui/core/Typography'

import techSkills from './content/techSkills.json'

const useStyles = makeStyles((theme) => ({
  heading: {
    color: '#f5cdaa'
  },
  listItemStyle: {
    backgroundColor: '#49464d',
    borderRadius: 3,
    border: '1px solid #ea5e42',
    color: '#EBF2FF',
    margin: '1px 0'
  }
}))

export default function TechContent() {
  const theme = useTheme()
  const classes = useStyles(theme)

  return (
    <Box>
      <Container style={{ margin: '0', padding: '0 16px' }}>
        <Grid container spacing={4}>
          {
            Object.keys(techSkills).map((key) => {
              return (
                <Grid item sm={3} key={key}>
                  <h2 className={classes.heading}>{key[0].toUpperCase() + key.slice(1)}</h2>
                  <List>
                    {
                      techSkills[key].map(item => (
                        <ListItem
                          key={item.toString()}
                          className={classes.listItemStyle}
                        >
                          {item}
                        </ListItem>
                      ))
                    }
                  </List>
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    </Box>
  )
}
