import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: '#f9a825'
    },
    secondary: {
      main: '#212121'
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
