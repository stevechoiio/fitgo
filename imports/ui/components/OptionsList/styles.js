const styles = theme => ({
  rootOptList: {
    width: '100%',
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper
  },
  listSkills: {
    display: 'flex',
    flexDirection: 'column'
    // padding: 0
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
