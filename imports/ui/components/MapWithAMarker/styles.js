const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  logo: {
    borderRadius: 50
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: '100%',
    flexShrink: 0,
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth
    }
  },
  drawerPaper: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth
    }
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'space-between'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  toolbar: {
    position: 'fixed',
    top: 0,
    left: 70,
    zIndex: 10
  },
  trainerProfileWrapper: {
    padding: 0
  },
  capitalize: {
    textTransform: 'capitalize'
  },
  subheading: {
    color: '#7dcdcd',
    fontWeight: 700,
    textTransform: 'uppercase'
  }
});

export default styles;
