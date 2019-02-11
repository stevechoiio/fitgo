import { Clients } from "../../api/clients";
import { Meteor } from "meteor/meteor";

Meteor.startup(() => {
  //   // add data to the database
  if (Clients.find().count() === 0) {
    Clients.insert({
      _id: "1",
      name: "Steve",
      email: "steve@gmail.com",
      languages: ["Chinese", "English"],
      skills: ["Strength Building", "Balance Training"],
      education: "UBC Kinesiology",
      trainer: true,
      currentLocation: {
        long: 49.28,
        lat: 123.1
      }
    });
    Clients.insert({
      _id: "2",
      name: "Tim",
      email: "timgabrielnguyen@gmail.com",
      languages: ["Vietnamese", "English"],
      skills: ["Strength Building", "Balance Training"],
      trainer: false,
      imageurl:
        "https://images.unsplash.com/photo-1537170358061-6c447791462e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    });
  }

  if (Meteor.users.find().count() === 0) {
    user = Accounts.createUser({
      email: "timtim@gmail.com",
      password: "timtimtim",
    });
  }
});
