const styles = theme => ({
  rootOptList: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.up('sm')]: {
      maxWidth: 300
    }
  },
  listSkills: {
    display: 'flex',
    flexDirection: 'column'
  },
  listItem: {
    padding: 0
  },
  liText: {
    textTransform: 'capitalize'
  },
  expPanel: {
    boxShadow: 'none',
    borderRadius: 'none'
  },
  expSum: {
    padding: '0 1rem 0 1rem'
  },
  formControl: {
    minWidth: 120,
    maxWidth: 300
  }
});

export default styles;
