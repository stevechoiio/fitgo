const styles = theme => ({
  rootOptList: {
    width: '100%',
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper
  },
  listSkills: {
    display: 'flex',
    flexDirection: 'column'
  },
  listItem: {
    padding: 0
  },

  expPanel: {
    boxShadow: 'none',
    borderRadius: 'none'
  },
  expSum: {
    padding: '0 1rem 0 1rem'
  }
});

export default styles;
