import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: '#bae5ce'
    },
    secondary: {
      main: '#008dd5'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        fontWeight: 400,
        paddingRight: '1.5rem',
        paddingLeft: '1.5rem'
      }
    }
  }
});
