import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  typography: {
    useNextVariants: true,
    color: '#efe9f4',
    fontFamily: 'Ubuntu, sans-serif'
  },
  palette: {
    primary: {
      main: '#efe9f4'
    },
    secondary: {
      main: '#bae5ce'
    }
  }
});
