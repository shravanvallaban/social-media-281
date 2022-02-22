import { createMuiTheme } from '@material-ui/core/styles'
import { blue, red } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
      primary: {
      light: '#52c7b8',
      main: '#3F4771',
      dark: '#00675b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffd95b',
      main: '#ffa726',
      dark: '#c77800',
      contrastText: '#000',
    },
      openTitle: blue['700'],
      protectedTitle: red['700'],
      type: 'light'
    }
  })

  export default theme  