import { createTheme } from '@material-ui/core/styles'

// const purple = '#514e62'
// const orange = '#ea5e42'
// const cream = '#f5cdaa'
// const gray = '#49464d'
// const white = '#EBF2FF'

// const bluegray ='#2c394b'
//* const green = '#334756'
// const maroon = '#845460'

// const newOrange = '#ff8f5d'
// const black = '#000000'
// const red = '#bd4b4b'
//* const salmon = '#efb7b7'


// periwinkle
// primary: {
//   light: '#a79fbe',
//   main: '#78718e',
//   dark: '#4c4661',
//   contrastText: '#EBF2FF'
// },


const theme = createTheme({
  palette: {
    primary: {
      light: '#5e7283',
      main: '#334756',
      dark: '#0a202d',
      contrastText: '#EBF2FF'
    },
    secondary: {
      light: '#efb7b7',
      main: '#ff8f5d',
      dark: '#ea5e42',
      contrastText: '#000000DE'
    },
    divider: 'rgba(29, 27, 30, 0.25)',
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
