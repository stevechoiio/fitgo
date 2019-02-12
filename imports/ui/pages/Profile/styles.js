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
      'linear-gradient(123deg, #72afd3 0%, #37ecba 40%, #FFFFFF 40%, #FFFFFF 100%)',
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
    [theme.breakpoints.up('sm')]: {
      width: '50%',
      justifyContent: 'left'
    }
  },
  avatar: {
    width: 160,
    margin: 10,
    height: 160,
    border: '3px solid white'
  },
  profileInfo: {
    display: 'flex',
    flexDirection: 'column'
  },
  chip: {
    backgroundImage: 'linear-gradient(to right, #37ecba 0%, #72afd3 100%)',
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
