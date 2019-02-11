import { Clients } from "../../api/clients";
import { Meteor } from "meteor/meteor";
// Meteor.startup(() => {
//   // add data to the database
//   if (Clients.find().count() === 0) {
//     Clients.insert({
//       name: "Steve"
//     });
//   }
// });
// import { Meteor } from "meteor/meteor";
Meteor.startup(() => {
  // if (!Meteor.users.find().count)
  //   user = Accounts.createUser(
  //     {
  //       email: "jimmy@gmail.com",
  //       password: "password"
  //     },
  //     {
  //       email: "a@a.com",
  //       password: "aa"
  //     },
  //     {
  //       email: "b@b.com",
  //       password: "bb"
  //     },
  //     {
  //       email: "c@c.com",
  //       password: "cc"
  //     }
  //   );
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
        lat: 123.10
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
});
