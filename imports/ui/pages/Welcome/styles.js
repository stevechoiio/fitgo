// import WelcomeBg from '../../../public/images/welcome.jpg';

const styles = theme => ({
  root: {
    backgroundImage: "url('/welcomeH.png')",
    // backgroundColor: theme.palette.primary.main,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    flexGrow: 1,
    background: theme.palette.primary.main,
    padding: theme.spacing.unit * 5,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing.unit * 20
    }
  }
});

export default styles;
