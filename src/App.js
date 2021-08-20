import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Toolbar from '@material-ui/core/Toolbar'

import PageFooter from './PageFooter'
import SectionLayout from './SectionLayout'

function App() {

  const purple = '#282638'
  const orange = '#ea5e42'
  const cream = '#f5cdaa'
  const gray = '#49464d'
  const white = '#EBF2FF'

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


      <header id='top' >
        <Box p={5} border={1}>
          Header
        </Box>
      </header>

      {/* Main Content of Page */}
      <Box id='content' style={{ flex: 1 }}>
        {/* About */}
        {/* Skills */}
        <SectionLayout
          sectionHeader={'Tech Skills'}
          theme={{
            backgroundColor: purple,
            color: cream
          }}
        >
          <h4>Content?</h4>
        </SectionLayout>

        {/* Experience */}
        <SectionLayout
          sectionHeader={'Experience'}
          theme={{
            backgroundColor: white,
            color: purple
          }}
        >
          <h4>Content Here</h4>
        </SectionLayout>

        {/* Education */}
        <SectionLayout
          sectionHeader={'Education'}
          theme={{
            backgroundColor: purple,
            color: cream
          }}
        >
          <h4>Content Here</h4>
        </SectionLayout>

        {/* Projects */}
        <SectionLayout
          sectionHeader={'Projects'}
          theme={{
            backgroundColor: white,
            color: purple
          }}
        >
          <h4>Content Here</h4>
        </SectionLayout>

        {/* Contact */}
        <SectionLayout
          sectionHeader={'Contact'}
          theme={{
            backgroundColor: orange,
            color: purple
          }}
        >
          <h4>Content Here</h4>
        </SectionLayout>
      </Box>

      <PageFooter />
    </Box>
  )
}

export default App;
