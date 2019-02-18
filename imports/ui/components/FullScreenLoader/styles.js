const styles = theme => ({
  container: {
    height: '100vh',
    background: 'linear-gradient(to top, #37ecba 0%, #72afd3 100%);'
  },
  wrapper: {
    margin: theme.spacing.unit,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  progress: {
    position: 'absolute',
    top: -30,
    zIndex: 1
  },
  message: {
    margin: theme.spacing.unit * 8
  }
});

export default styles;
