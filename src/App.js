import React, { useEffect, useState } from 'react'
import Box from '@material-ui/core/Box'

import AboutContent from './AboutContent'
import EducationContent from './EducationContent'
import ExperienceContent from './ExperienceContent'
import ProjectsContent from './ProjectsContent'
import TechContent from './TechContent'
import ContactForm from './ContactForm'
import PageFooter from './PageFooter'
import SectionLayout from './SectionLayout'
import SiteNavigation from './SiteNavigation/SiteNavigation'

import theme from './theme'

function App() {

  const listenScrollEvent = (event) => {
    const currentPos = window.scrollY
    const rect = document.getElementById('experience').getBoundingClientRect()
    // console.log('bounding Rectangle', rect)
    const top = rect.top + window.pageYOffset
    const bot = rect.bottom + window.pageYOffset

    console.log(`current: ${currentPos}, top: ${top}, bottom: ${bot}`)

    if ((currentPos > top) && (currentPos < bot)) {
      console.log('between')
      window.history.replaceState({ ...window.history.state }, '', '#experience')
    } else {
      console.log('not between')
      // window.history.replaceState({ ...window.history.state }, '', '#experience')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)

    return () => window.removeEventListener('scroll', listenScrollEvent)
  }, [])


  return (
    <Box style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

      <SiteNavigation />

      <header id='top' >
      {/* <Box p={5} border={1}>
          Welcome Header
        </Box>
      */}
      </header>

      {/* Main Content of Page */}
      <Box id='content' style={{ flex: 1 }}>
        {/* About */}
        <SectionLayout
          id='about'
          sectionHeader={'Welcome to My Resume'}
          backgroundColor={theme.palette.white.main}
          color={theme.palette.primary.main}
        >
          <AboutContent />
        </SectionLayout>

        {/* Skills */}
        <SectionLayout
          id='tech-skills'
          sectionHeader={'Tech Skills'}
          backgroundColor={theme.palette.primary.main}
          color={theme.palette.cream.main}
        >
          <TechContent />
        </SectionLayout>

        {/* Projects */}
        <SectionLayout
          id='projects'
          sectionHeader={'Projects'}
          backgroundColor={theme.palette.white.main}
          color={theme.palette.primary.main}
        >
          <ProjectsContent />
        </SectionLayout>

        {/* Education */}
        <SectionLayout
          id='education'
          sectionHeader={'Education'}
          backgroundColor={theme.palette.primary.main}
          color={theme.palette.cream.main}
        >
          <EducationContent />
        </SectionLayout>

        {/* Experience */}
        <SectionLayout
          id='experience'
          sectionHeader={'Experience'}
          backgroundColor={theme.palette.white.main}
          color={theme.palette.primary.main}
        >
          <ExperienceContent />
        </SectionLayout>

        {/* Contact */}
        <SectionLayout
          id='contact'
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
