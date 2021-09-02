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
      contrastText: '#EBF2FF'
    },
    secondary: {
      light: '#ff8f6e',
      main: '#ea5e42',
      dark: '#b12b18',
      contrastText: '#000000DE'
    },
    divider: 'rgba(29, 27, 30, 0.25)',
    purple: {
      main: '#282638'
    },
    orange: {
      main: '#ff8f6e'
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
    ].join(','),
    h2: {
      fontSize: '3.175rem',
      fontWeight: 300,
      letterSpacing: '.0125rem',
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '2.4rem',
      fontWeight: 300,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 700
    },
    subtitle2: {
      fontSize: '1.2rem',
      fontWeight: 400,
      letterSpacing: '0.045rem',
      lineHeight: 1.2,
    },
    body1: {
      lineHeight: 1.8
    },
  },
})

export default theme
