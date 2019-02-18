const styles = theme => ({
  rootClients: {
    flexGrow: 1,
    paddingTop: theme.spacing.unit * 2,
<<<<<<< HEAD
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing.unit * 5,
      paddingLeft: theme.spacing.unit * 12,
      paddingRight: theme.spacing.unit * 12,
      width: '90vw'
=======
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing.unit * 5
>>>>>>> master
    }
  },
  heading: {
    width: "100%",
    textAlign: "center"
  },
  control: {
    padding: theme.spacing.unit,
    [theme.breakpoints.up("sm")]: {
      paddingBottom: theme.spacing.unit * 5
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing.unit * 2
    }
  },
  profileWrapper: {
    padding: theme.spacing.unit * 2,
    backgroundImage:
      "linear-gradient(-123deg, #FFFFFF 0%, #FFFFFF 40%, #37ecba 40%, #72afd3 100%)",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.up("md")]: {
      flexDirection: "column"
    }
  },
  avatarWrapper: {
    display: "flex",
    width: "50%",
    justifyContent: "flex-end",
    order: 2,
    [theme.breakpoints.up("md")]: {
      width: "100%",
      justifyContent: "center",
      order: 1
    }
  },
  avatar: {
    width: 100,
    margin: 10,
    height: 100,
    border: "2px solid #171d1c"
  },
  grow: { flexGrow: 1 },
  profileInfo: {
    display: "flex",
    flexDirection: "column",
    order: 1,
    [theme.breakpoints.up("sm")]: {
      order: 2
    }
  },
  chip: {
    backgroundImage: "linear-gradient(to right, #bae5ce 0%, #efe9f4 100%)",
    backgroundSize: "cover",
    marginTop: theme.spacing.unit,
    padding: theme.spacing.unit,
    justifyContent: "left",
    width: "fit-content"
  }
});

export default styles;
