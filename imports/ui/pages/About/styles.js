const styles = theme => ({
  root: {
    backgroundImage: "url('/fitgo-about-min.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    flexGrow: 1,
    background: theme.palette.primary.main,
    padding: theme.spacing.unit * 5,
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing.unit * 20
    },
    marginTop: "7rem"
  },
  banner: {
    flexStart: 1
  },
  statement: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    padding: "3rem"
  },
  description: {
    fontSize: "25px"
  }
});

export default styles;
