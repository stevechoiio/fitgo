const styles = theme => ({
  root: {
    backgroundImage: "url('/profileH.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // filter: 'grayscale(100%)',
    height: '100vh',
    flexGrow: 1,
    background: theme.palette.primary.main,
    padding: theme.spacing.unit * 5,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing.unit * 20
    }
  },
  profile: {
    color: 'red',
    background: 'white'
  }
});

export default styles;
