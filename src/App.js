import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Toolbar from '@material-ui/core/Toolbar'

import AboutSection from './AboutSection'

function App() {
  return (
    <Box style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position='sticky'>
        <Toolbar>
          <Tabs value={0}>
            <Tab label='Home' href='http://monsed.com' />
            <Tab label='Projects' href='http://restaurant.monsed.com' />
          </Tabs>
        </Toolbar>
      </AppBar>

      <header>Header</header>

      <div id='#top'></div>

      <div id='#content' style={{ flex: 1 }}>
        <Box m={0} p={0}>
          <AboutSection />
        </Box>
      </div>

      <footer height='200px'>
        <Box mt={5} p={5} bgcolor='#f5cdaa'>
          <Container>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={4}>
                <Box py={2}>
                  <Link href='www.monsed.com' color='inherit'>
                    Home
                  </Link>
                </Box>
                <Box py={2}>
                  <Link href='#top' color='inherit'>
                    To Top
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </footer>
    </Box>
  )
}

export default App;


// {/* Navigation */}
// <AppBar position='sticky'>
//   <Toolbar>
//     <Tabs value={0}>
//       <Tab label='Home' href='http://monsed.com' />
//       <Tab label='Projects' href='http://restaurant.monsed.com' />
//     </Tabs>
//   </Toolbar>
// </AppBar>
