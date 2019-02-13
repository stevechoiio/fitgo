import React, { Component } from "react";
import { Clients } from "../../../api/clients";
import { Trainers } from "../../../api/trainers";
import { withTracker } from "meteor/react-meteor-data";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Avatar from "@material-ui/core/Avatar";
import Email from "@material-ui/icons/Email";
import Education from "@material-ui/icons/School";
import Language from "@material-ui/icons/Language";
import Skill from "@material-ui/icons/AddCircleOutline";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import FavoriteTrainers from "../../components/FavoriteTrainers/FavoriteTrainers"

class Profile extends Component {
  componentDidMount() {
    // const trainers = this.props.trainers.filter((trainer) => trainer.username === currentUser.username)
    // console.log(trainers);
  }

  render() {
    const { classes, currentUser } = this.props;
    const trainers = this.props.trainers.filter(
      trainer => trainer.username === currentUser.username
    );
    const clients = this.props.clients.filter(
      client => client.username === currentUser.username
    );
    console.log(clients);

    return (<div>
      <FavoriteTrainers />
      <Grid
        container
        className={classes.root}
        direction="row"
        alignItems="center"
        justify="center"
      >
        {/* <Grid item xs={12}>
          <Hidden only={['sm', 'md', 'lg']}>
            <Grid container justify='center' alignItems='center'>
              <Avatar
                alt=''
                src='http://www.cutestpaw.com/wp-content/uploads/2011/11/To-infinity-and-beyond.jpeg'
                className={classes.avatar}
              />
            </Grid>
          </Hidden>
        </Grid> */}
        {trainers.map(trainer => (
          <Grid item xs={12} sm={12} md={8} key={trainer._id}>
            <Paper className={classes.profileWrapper} elevation={3}>
              <Grid container className={classes.avatarWrapper}>
                <Avatar
                  alt=""
                  src="http://www.cutestpaw.com/wp-content/uploads/2011/11/To-infinity-and-beyond.jpeg"
                  className={classes.avatar}
                />
              </Grid>
              <div className={classes.profileInfo}>
                <Typography variant="h2" gutterBottom>
                  {trainer.name}
                </Typography>
                <Typography variant="h5" gutterBottom>
                  Abyssinian thai but tabby. Persian grimalkin. Lion. Kitty tom,
                  so leopard but cheetah yet ragdoll.
                </Typography>
                <Chip
                  // icon={<Phone />}
                  label={`Phone - ${trainer.phone}`}
                  className={classes.chip}
                  color="secondary"
                />
                <Chip
                  icon={<Email />}
                  label={`EMAIL - ${trainer.email}`}
                  className={classes.chip}
                  color="secondary"
                />
                <Chip
                  icon={<Education />}
                  label={`EDUCATION - ${trainer.education}`}
                  className={classes.chip}
                  color="secondary"
                />
                <Chip
                  icon={<Language />}
                  label={`LANGUAGES - ${trainer.languages.join(", ")}`}
                  className={classes.chip}
                  color="secondary"
                />
                <Chip
                  icon={<Skill />}
                  label={`SKILLS - ${trainer.skills.join(", ")}`}
                  className={classes.chip}
                  color="secondary"
                />
              </div>
            </Paper>
          </Grid>
        ))}
        {/* <div className={classes.profile}>
          {trainers.map(trainer => (
            <div key={trainer._id}>
              <h1>Name: {trainer.name}</h1>
              <h2>Email: {trainer.email}</h2>
              <h2>Education: {trainer.education}</h2>
              <h2>Languages: {trainer.languages.join(', ')}</h2>
              <h2>Skills: {trainer.skills.join(', ')}</h2>
            </div>
          ))}
        </div> */}
      </Grid>
       <Grid
       container
       className={classes.root}
       direction="row"
       alignItems="center"
       justify="center"
     >
       {/* <Grid item xs={12}>
         <Hidden only={['sm', 'md', 'lg']}>
           <Grid container justify='center' alignItems='center'>
             <Avatar
               alt=''
               src='http://www.cutestpaw.com/wp-content/uploads/2011/11/To-infinity-and-beyond.jpeg'
               className={classes.avatar}
             />
           </Grid>
         </Hidden>
       </Grid> */}
       {clients.map(client => (
         <Grid item xs={12} sm={12} md={8} key={client._id}>
           <Paper className={classes.profileWrapper} elevation={3}>
             <Grid container className={classes.avatarWrapper}>
               <Avatar
                 alt=""
                 src="http://www.cutestpaw.com/wp-content/uploads/2011/11/To-infinity-and-beyond.jpeg"
                 className={classes.avatar}
               />
             </Grid>
             <div className={classes.profileInfo}>
               <Typography variant="h2" gutterBottom>
                 {client.name}
               </Typography>
               <Typography variant="h5" gutterBottom>
                 Abyssinian thai but tabby. Persian grimalkin. Lion. Kitty tom,
                 so leopard but cheetah yet ragdoll.
               </Typography>
               <Chip
                 icon={<Email />}
                 label={`EMAIL - ${client.email}`}
                 className={classes.chip}
                 color="secondary"
               />
               <Chip
                 icon={<Education />}
                 label={`EDUCATION - ${client.education}`}
                 className={classes.chip}
                 color="secondary"
               />
               <Chip
                 icon={<Language />}
                 label={`LANGUAGES - ${client.languages.join(", ")}`}
                 className={classes.chip}
                 color="secondary"
               />
               <Chip
                 icon={<Skill />}
                 label={`SKILLS - ${client.skills.join(", ")}`}
                 className={classes.chip}
                 color="secondary"
               />
             </div>
           </Paper>
         </Grid>
       ))}
       
     </Grid>
     </div>
      
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("clients"); // NEW!
  Meteor.subscribe("trainers");
  console.log(Meteor.user());
  return {
    trainers: Trainers.find({}).fetch(),
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId(),
    clients: Clients.find({}).fetch()
  };
})(withStyles(styles)(Profile));
