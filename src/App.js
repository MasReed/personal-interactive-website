import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Toolbar from '@material-ui/core/Toolbar'

function App() {
  return (
    <>
      <AppBar position='sticky'>
        <Toolbar>
          <Tabs value={0}>
            <Tab label='Home' href='http://monsed.com' />
            <Tab label='Projects' href='http://restaurant.monsed.com' />
          </Tabs>
        </Toolbar>
      </AppBar>

      {/* Profile & About Section */}
      <Box m={0} py={5}>
        <Container>
          <h3>Welcome to my curriculum vitae!</h3>
          <hr />
          <h3>About Me</h3>
          <p>
              I love finding solutions! I'm a self-taught, full stack
              developer and masterful problem solver. My background is
              in astrophysics and I have experience in STEM education.
              I have a passion to learn new things and share them with
              others. I also enjoy multi-player, strategy
              games, such as Magic: the Gathering and Catan!
          </p>

          <img src="images/headshot.png" alt="A bad selfie" />
          <h3>Details</h3>
          <p>
              <strong>Name:</strong>
              <br />
              Mason Reed
              <br />

              <strong>Location:</strong>
              <br />
              Midwest, USA
              <br />

              <strong>Age:</strong>
              <br />
              28
              <br />
              <br />

              <a href="https://www.instagram.com/mr.time_travel/">mr.time_travel</a>
          </p>

          <hr />
          <Button variant='contained' color='primary'>
            This is a button
          </Button>
        </Container>
      </Box>
    </>
  )
}

export default App;
