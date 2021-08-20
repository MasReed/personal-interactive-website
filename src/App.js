import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Toolbar from '@material-ui/core/Toolbar'

import AboutContent from './AboutContent'
import EducationContent from './EducationContent'
import ExperienceContent from './ExperienceContent'
import ProjectsContent from './ProjectsContent'
import TechContent from './TechContent'
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
          Welcome Header
        </Box>
      </header>

      {/* Main Content of Page */}
      <Box id='content' style={{ flex: 1 }}>
        {/* About */}
        <SectionLayout
          sectionHeader={'Welcome to My Resume'}
          theme={{
            backgroundColor: white,
            color: purple
          }}
        >
          <AboutContent />
        </SectionLayout>

        {/* Skills */}
        <SectionLayout
          sectionHeader={'Tech Skills'}
          theme={{
            backgroundColor: purple,
            color: cream
          }}
        >
          <TechContent />
        </SectionLayout>

        {/* Experience */}
        <SectionLayout
          sectionHeader={'Experience'}
          theme={{
            backgroundColor: white,
            color: purple
          }}
        >
          <ExperienceContent />
        </SectionLayout>

        {/* Education */}
        <SectionLayout
          sectionHeader={'Education'}
          theme={{
            backgroundColor: purple,
            color: cream
          }}
        >
          <EducationContent />
        </SectionLayout>

        {/* Projects */}
        <SectionLayout
          sectionHeader={'Projects'}
          theme={{
            backgroundColor: white,
            color: purple
          }}
        >
          <ProjectsContent />
        </SectionLayout>

        {/* Contact */}
        <SectionLayout
          sectionHeader={'Get In Touch'}
          theme={{
            backgroundColor: orange,
            color: purple
          }}
        >
          <Link href="mailto:name@email.com">Email</Link>
        </SectionLayout>
      </Box>

      <PageFooter />
    </Box>
  )
}

export default App;
