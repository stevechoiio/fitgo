const styles = theme => ({
  root: {
    // backgroundImage: "url('/profileH.jpg')",
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    // backgroundPosition: 'center-bottom',
    // height: '100vh',
    // width: '100vw',
    flexGrow: 1,
    // background: theme.palette.primary.main,
    padding: theme.spacing.unit * 5,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing.unit * 10
    }
  },
  profileWrapper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    backgroundImage:
      'linear-gradient(-123deg, #72afd3 0%, #37ecba 40%, #FFFFFF 40%, #FFFFFF 100%)',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row'
    }
  },
  avatarWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    order: 1,
    [theme.breakpoints.up('sm')]: {
      width: '50%',
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
    justifyContent: 'left',
    width: 'fit-content'
  },
  profile: {
    color: 'red',
    background: 'white'
  }
});

export default styles;
