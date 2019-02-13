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
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

export default styles;
