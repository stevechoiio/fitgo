// import WelcomeBg from '../../../public/images/welcome.jpg';

const styles = theme => ({
  root: {
    // backgroundImage:
    //   "linear-gradient(to top, #37ecba 0%, #72afd3 100%), url('/welcomeH.png')",
    backgroundImage: "url('/welcomeH.png')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'grayscale(100%)',
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

// background-image: linear-gradient(to top, #37ecba 0%, #72afd3 100%);
