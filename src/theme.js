import { createTheme } from '@material-ui/core/styles'

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
    }
  },
  status: {
    danger: '#FF0000'
  },
})

export default theme
