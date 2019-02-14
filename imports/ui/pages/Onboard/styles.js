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
  paper: {
    height: '60vh',
    borderRadius: '5px',
    background: 'linear-gradient(to top, #37ecba 0%, #72afd3 100%);',
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    margin: theme.spacing.unit * 2,
    outline: 'none'
  },
  button: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2
  }
});

export default styles;

// background-image: linear-gradient(to top, #37ecba 0%, #72afd3 100%);
