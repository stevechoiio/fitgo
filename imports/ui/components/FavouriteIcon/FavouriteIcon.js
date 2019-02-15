import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import FavIconFilled from "@material-ui/icons/Favorite";
import FavIconOutline from "@material-ui/icons/FavoriteBorder";
import styles from "./styles";
import IconButton from "@material-ui/core/IconButton";


//check for the database to determine the favoruite
//Call the Method here -


/// in this HeartIcon component, you are going to receive the trainer_id<<<< 
/// using that, you need to pull out the trainers collection, and find the trainer, and then , check if the clients:[] has current.user.id. if yes => then heart should be filled, if not then it should be empty.



class HeartIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favourite: false
    };
  }
  toggleFavorite = () => {
    this.setState({ favourite: !this.state.favourite });
    console.log(this.state.favourite);
  };
  render() {
    const { favourite } = this.state;
    return (
      <div>
        <IconButton onClick={this.toggleFavorite} color="primary">
          {favourite ? <FavIconFilled /> : <FavIconOutline />}
        </IconButton>
      </div>
    );
  }
}

export default withStyles(styles)(HeartIcon);
