import React, { useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'

import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

import techSkills from './content/techSkills.json'

const useStyles = makeStyles((theme) => ({
  heading: {
    color: theme.palette.cream.main,
    margin: '0 0 .75rem',
    padding: '.5rem 0',
  },
  listItemStyle: {
    backgroundColor: theme.palette.secondary.light,
    boxShadow: theme.shadows[4],
    color: theme.palette.text.primary,
    '&:hover': {
      backgroundColor: theme.palette.white.main,
      border: '0.0125rem solid',
      borderColor: theme.palette.text.primary,
    }
  },
  listStyle: {
    color: theme.palette.white.main,
    boxShadow: theme.shadows[4],
    margin: 0,
    padding: 0,
  },
  expandedListItem: {
    backgroundColor: theme.palette.cream.main,
    border: '0.0125rem solid',
    borderColor: theme.palette.primary.main,
    boxShadow: theme.shadows[24],
    margin: 0,
  },
  expandedListText: {
    color: theme.palette.text.primary,
    margin: 0,
    padding: 0,
  },
}))

export default function TechContent() {
  const theme = useTheme()
  const classes = useStyles(theme)

  const languages = techSkills['languages']

  const [open, setOpen] = useState({
    "javascript": false,
    "htmlcss": false,
    "mql": false,
    "python": false,
    "sql": false
  })

  const handleClick = (id) => {
    setOpen({ ...open, [id]: !open[id] })
  }

  return (
    <>
      <Grid container spacing={4}>
        <Grid item sm={3}>
          {/* Languages Title */}
          <Typography className={classes.heading} variant='h5'>
            {Object.keys(techSkills)[0][0].toUpperCase() + Object.keys(techSkills)[0].slice(1)}
          </Typography>

          {/* Languagues Dropdown Menus */}
          {
            languages.map(language => (
              <List
                key={language.language}
                component='nav'
                className={classes.listStyle}
              >
                <ListItem button className={classes.listItemStyle} onClick={() => handleClick(language.id)}>
                  <ListItemText primary={language.language} />
                  {open[language.id] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open[language.id]} timeout='auto' unmountOnExit>
                  <Box className={classes.expandedListItem}>
                    <ul style={{ margin: 0, padding: '.5rem 2.5rem' }}>
                      {
                        language.libraries.map(lib => (
                          <Typography key={lib} className={classes.expandedListText} component='li' variant='body2'>
                            {lib}
                          </Typography>
                        ))
                      }
                    </ul>
                  </Box>
                </Collapse>
              </List>
            ))
          }

        </Grid>

        {/* Regular Lists and Items */}
        {
          Object.keys(techSkills).slice(1).map((key) => {
            return (
              <Grid item sm={3} key={key}>
                <Typography className={classes.heading} variant='h5'>
                  {key[0].toUpperCase() + key.slice(1)}
                </Typography>
                <List className={classes.listStyle}>
                  {
                    techSkills[key].map(item => (
                      <ListItem
                        key={item}
                        className={classes.listItemStyle}
                      >
                        <ListItemText primary={item} />
                      </ListItem>
                    ))
                  }
                </List>
              </Grid>
            )
          })
        }
      </Grid>
    </>
  )
}
