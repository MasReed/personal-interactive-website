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
    backgroundColor: '#49464d',
    borderRadius: 3,
    border: '1px solid #ea5e42',
    color: '#EBF2FF',
    margin: '1px 0'
  },
  listStyle: {
    color: theme.palette.white.main,
    margin: 0,
    padding: 0,
  },
  nestedListItem: {
    color: theme.palette.white.main,
    margin: 0,
    padding: '0 .75rem',
  },
  nestedListText: {
    color: theme.palette.white.main,
    margin: 0,
    padding: 0,
  },
}))

export default function TechContent() {
  const theme = useTheme()
  const classes = useStyles(theme)

  const [open, setOpen] = useState(false)

  const handleClick = (event) => {
    console.log(event)
    setOpen(!open)
  }

  const languages = techSkills['languages']

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
                key={language}
                component='nav'
                className={classes.listStyle}
              >
                <ListItem button className={classes.listItemStyle} onClick={handleClick}>
                  <ListItemText primary={language.language} />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout='auto' unmountOnExit>
                  <Box className={classes.listItemStyle}>
                    <ul>
                      {
                        language.libraries.map(lib => (
                          <li key={lib}>{lib}</li>
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

// <Grid container spacing={4}>
//   {
//     Object.keys(techSkills).map((key) => {
//       return (
//         <Grid item sm={3} key={key}>
//           <h2 className={classes.heading}>{key[0].toUpperCase() + key.slice(1)}</h2>
//           <List>
//             {
//               techSkills[key].map(item => (
//                 <ListItem
//                   key={item.toString()}
//                   className={classes.listItemStyle}
//                 >
//                   {item}
//                 </ListItem>
//               ))
//             }
//           </List>
//         </Grid>
//       )
//     })
//   }
// </Grid>
