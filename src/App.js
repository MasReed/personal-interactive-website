import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import AboutContent from './AboutContent'
import EducationContent from './EducationContent'
import ExperienceContent from './ExperienceContent'
import ProjectsContent from './ProjectsContent'
import TechContent from './TechContent'
import ContactForm from './ContactForm'
import PageFooter from './PageFooter'
import SectionLayout from './SectionLayout'

import theme from './theme'

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
          backgroundColor={theme.palette.white.main}
          color={theme.palette.primary.main}
        >
          <AboutContent />
        </SectionLayout>

        {/* Skills */}
        <SectionLayout
          sectionHeader={'Tech Skills'}
          backgroundColor={theme.palette.primary.main}
          color={theme.palette.cream.main}
        >
          <TechContent />
        </SectionLayout>

        {/* Projects */}
        <SectionLayout
          sectionHeader={'Projects'}
          backgroundColor={theme.palette.white.main}
          color={theme.palette.primary.main}
        >
          <ProjectsContent />
        </SectionLayout>

        {/* Education */}
        <SectionLayout
          sectionHeader={'Education'}
          backgroundColor={theme.palette.primary.main}
          color={theme.palette.cream.main}
        >
          <EducationContent />
        </SectionLayout>

        {/* Experience */}
        <SectionLayout
          sectionHeader={'Experience'}
          backgroundColor={theme.palette.white.main}
          color={theme.palette.primary.main}
        >
          <ExperienceContent />
        </SectionLayout>

        {/* Contact */}
        <SectionLayout
          sectionHeader={'Get In Touch'}
          backgroundColor={theme.palette.cream.main}
          color={theme.palette.primary.main}
        >
          <ContactForm />
        </SectionLayout>
      </Box>

      <PageFooter />
    </Box>
  )
}

export default App;
