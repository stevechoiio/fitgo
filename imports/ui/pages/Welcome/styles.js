const styles = theme => ({
  root: {
    backgroundImage: "url('/welcomeH.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'grayscale(100%)',
    height: '100vh',
    flexGrow: 1,
    background: theme.palette.primary.main,
    padding: theme.spacing.unit * 5,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing.unit * 20
    }
  },
  loginWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    position: 'relative',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    background: 'linear-gradient(to top, #37ecba 0%, #72afd3 100%);',
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 8,
    outline: 'none',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing.unit * 23
    },
    [theme.breakpoints.up('md')]: {
      width: '30%',
      margin: theme.spacing.unit * 2,
      padding: theme.spacing.unit * 4,
      borderRadius: '5px',
      top: '20%',
      left: '55%',
      height: 450
    }
  }
});

export default styles;
