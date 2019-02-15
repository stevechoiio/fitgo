const styles = theme => ({
  root: {
    backgroundImage: "url('/pageH.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    flexGrow: 1,
    background: theme.palette.primary.main,
    padding: theme.spacing.unit * 5,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing.unit * 20
    }
  },
  rootDialog: {
    height: '100%',
    background: 'linear-gradient(to top, #37ecba 0%, #72afd3 100%);',
    boxShadow: theme.shadows[5],
    outline: 'none',
    overflow: 'scroll',
    padding: theme.spacing.unit * 3
  },
  closeBtn: {
    margin: 10,
    borderRadius: 20,
    height: 40,
    width: 40,
    position: 'fixed',
    right: 0,
    top: 0,
    backgroundColor: 'transparent',
    boxShadow: 'none'
  }
  // button: {
  //   marginTop: theme.spacing.unit * 2,
  //   marginBottom: theme.spacing.unit * 2
  // },
  // formControl: {
  //   marginTop: theme.spacing.unit * 2,
  //   marginTop: theme.spacing.unit * 2
  // },
  // skills: {
  //   display: 'flex',
  //   flexWrap: 'wrap'
  // },
  // error: {
  //   fontFamily: 'Ubuntu, sans-serif',
  //   color: 'red',
  //   fontSize: '1rem',
  //   marginTop: theme.spacing.unit / 2
  // }
});

export default styles;

// background-image: linear-gradient(to top, #37ecba 0%, #72afd3 100%);
