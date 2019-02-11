import React, { Component } from "react";
import styles from "./styles";
import { ClientsContext } from "../../context/ClientsProvider";

class Profile extends Component {
  render() {
    const classes = this.props;

    return (
      <div className="profile">
        {/* if (clients.user === true) { */}
        <ClientsContext.Consumer>
          {({ clients }) =>
            clients.map(a => (
              <div key={a._id}>
                <h1>Name: {a.name}</h1>
                <h2>Email: {a.email}</h2>
                <h2>Education: {a.education}</h2>
                <h2>Languages: {a.languages.join(", ")}</h2>
                <h2>Skills: {a.skills.join(", ")}</h2>
              </div>
            ))
          }
        </ClientsContext.Consumer>
      </div>
    );
  }
}

export default Profile;
