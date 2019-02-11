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
  // overrides: {
  //   MuiButton: {
  //     root: {
  //       // fontWeight: 400,
  //       // paddingRight: '2.5rem',
  //       // paddingLeft: '1.5rem'
  //       // color: '#efe9f4'
  //       // background: 'black',
  //       // '&:hover:not($disabled):not($error):not($focused):before': {
  //       //   background: 'yellow'
  //       // },
  //       // disabled: {},
  //       // error: {},
  //       // focused: {}
  //     }
  //   }
  // }
});
