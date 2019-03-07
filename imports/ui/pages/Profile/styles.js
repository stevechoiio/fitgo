const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 5
  },
  profileWrapper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 5,
    backgroundImage:
      'linear-gradient(-123deg, #72afd3 0%, #37ecba 40%, #FFFFFF 40%, #FFFFFF 100%)',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      marginTop: theme.spacing.unit * 5
    }
  },
  avatarWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    order: 1,
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-end',
      order: 2
    }
  },
  avatar: {
    width: 160,
    margin: 10,
    height: 160,
    border: '3px solid white'
  },
  grow: { flexGrow: 1 },
  profileInfo: {
    display: 'flex',
    flexDirection: 'column',
    order: 2,
    [theme.breakpoints.up('sm')]: {
      order: 1
    }
  },
  chip: {
    backgroundImage: 'linear-gradient(to right, #72afd3 0%, #37ecba 100%)',
    backgroundSize: 'cover',
    margin: theme.spacing.unit,
    padding: theme.spacing.unit,
    justifyContent: 'left',
    width: 'fit-content'
  },
  capitalize: { textTransform: 'capitalize' }
});

export default styles;
