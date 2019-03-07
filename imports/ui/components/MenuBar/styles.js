const styles = theme => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 2
  },
  toolbar: { maxHeight: '64px' },
  menuBar: {
    backgroundColor: '#171d1c',
    boxShadow: 'none'
  },
  grow: {
    flexGrow: 1
  },
  homeButton: {
    marginLeft: -12,
    marginRight: 20
  },
  optns: {
    display: 'flex',
    maxHeight: '64px'
  },
  user: { padding: '6px 8px' }
});

export default styles;
