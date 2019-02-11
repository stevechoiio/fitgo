import React, { Component } from "react";
import styles from "./styles";
import { withTracker } from "meteor/react-meteor-data";
import { Clients } from "../../../../imports/api/clients";
import { Meteor } from "meteor/meteor";
import Typography from "@material-ui/core";

class Profile extends Component {
  render() {
    const { classes, clients } = this.props;
    console.log(clients[0]);

    return (
      <div>
        {/* if (clients.user === true) { */}
        {clients.map(a => (
          <div>
            {/* {item.tags.map(tag => tag.title).join(', ')} */}
            {/* <h1 key={a._id}> {a.imageurl}</h1> */}
            <h1 key={a._id}>Name: {a.name}</h1>
            <h2 key={a._id}>Email: {a.email}</h2>
            <h2 key={a._id}>Education: {a.education}</h2>
            <h2 key={a._id}>Languages: {a.languages.join(", ")}</h2>
            <h2 key={a._id}>Skills: {a.skills.join(", ")}</h2>
            


          </div>
        ))}
        {/* } */}
        {/* {clients.map(client => {
          <Typography>{client.name}</Typography>;
        })} */}
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("clients"); // NEW!

  return {
    clients: Clients.find({}).fetch(),
    currentUser: Meteor.user(),
    currentUserId: Meteor.userId()
  };
})(Profile);
