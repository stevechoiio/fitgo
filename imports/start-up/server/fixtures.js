import { Clients } from "../../api/clients";
import { Trainers } from "../../api/trainers";
import { Meteor } from "meteor/meteor";

Meteor.startup(() => {
  //   // add data to the database
  if (Clients.find().count() === 0) {
    Clients.insert({
      _id: "1",
      name: "Matt",
      email: "matt@gmail.com",
      languages: ["Chinese", "English"],
      skills: ["Strength Building", "Balance Training"],
      username: "matty"
    });
    Clients.insert({
      _id: "2",
      name: "Jen",
      email: "jen@gmail.com",
      languages: ["Chinese", "English"],
      skills: ["Strength Building", "Balance Training"],
      username: "jenny"
    });
  }

  if (Trainers.find().count() === 0) {
    Trainers.insert({
      _id: "1",
      name: "Steve",
      email: "steve@gmail.com",
      education: "UBC Kinesiology",
      languages: ["Korean", "English"],
      skills: ["Strength Building"],
      currentLocation: {
        long: 49.28,
        lat: 123.1
      },
      username: "steven",
      clients: [1,2]
    });
    Trainers.insert({
      _id: "2",
      name: "Tim",
      email: "timtim@gmail.com",
      education: "UBC Kinesiology",
      languages: ["Vietnamese", "English"],
      skills: ["Strength Building"],
      currentLocation: {
        long: 49.28,
        lat: 123.11
      },
      username: "timmy",
      clients: [2]
    });
  }

  if (Meteor.users.find().count() === 0) {
    user = Accounts.createUser({
      email: "timtim@gmail.com",
      password: "timtimtim",
      username: "timmy"
    });
  }
});
