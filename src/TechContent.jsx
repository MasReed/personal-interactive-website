import React, { useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Collapse from '@material-ui/core/Collapse'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

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
  },
  nestedList: {
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

  const handleClick = () => {
    setOpen(!open)
  }

  const languages = techSkills['languages']

  return (
    <>
      <Grid container spacing={4}>
        <Grid item sm={3}>
          <Typography className={classes.heading} variant='h5'>
            {Object.keys(techSkills)[0][0].toUpperCase() + Object.keys(techSkills)[0].slice(1)}
          </Typography>

          {
            languages.map(language => (
              <List
                component='nav'
                className={classes.root}
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
                          <li>{lib}</li>
                        ))
                      }
                    </ul>
                  </Box>
                </Collapse>
              </List>
            ))
          }

        </Grid>
      </Grid>
    </>
  )
}

//
//
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
