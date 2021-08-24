import { createTheme } from '@material-ui/core/styles'

// const purple = '#282638'
// const orange = '#ea5e42'
// const cream = '#f5cdaa'
// const gray = '#49464d'
// const white = '#EBF2FF'

const theme = createTheme({
  palette: {
    primary: {
      light: '#727a8f',
      main: '#514e62',
      dark: '#282638',
      contrastText: '#f5cdaa'
    },
    secondary: {
      light: '#ff8f6e',
      main: '#ea5e42',
      dark: '#b12b18',
      contrastText: '#000000'
    },
    purple: {
      main: '#282638'
    },
    orange: {
      main: '#EA5E42'
    },
    cream: {
      main: '#f5cdaa'
    },
    gray: {
      main: '#49464d'
    },
    white: {
      main: '#EBF2FF'
    }
  },
  typography: {
    fontFamily: [
      '"Roboto Slab", serif',
      'Roboto',
      'Helvetica',
      'Arial',
      'sans-serif'
    ].join(',')
  },
})

export default theme
