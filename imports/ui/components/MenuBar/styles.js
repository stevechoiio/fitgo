const styles = theme => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 2
  },
  menuBar: {
    backgroundColor: 'black',
    boxShadow: 'none'
    // zIndex: theme.zIndex.drawer + 1
  },
  grow: {
    flexGrow: 1
  },
  homeButton: {
    marginLeft: -12,
    marginRight: 20
  },
  optns: {
    display: 'flex'
  }
});

export default styles;
