import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Toolbar from '@material-ui/core/Toolbar'

import AboutSection from './AboutSection'
import PageFooter from './PageFooter'

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


      <header id='top'>Header</header>

      <div id='content' style={{ flex: 1 }}>
        <Box>
          <div id='about'></div>
          <AboutSection />
        </Box>
      </div>

      <PageFooter />
    </Box>
  )
}

export default App;
