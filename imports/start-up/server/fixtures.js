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
  // if (Meteor.users.find().count() === 0) {
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
    Clients.insert(
      {
        _id: "1",
        bio: {
          education: "UBC Physio",
          certficates: "Physiotherapist",
          languages: ["Chinese", "English"]
        },
        name: "Steve",
        skills: ["Strength Building", "Balance Training"]
      },
      {
        _id: "2",
        bio: {
          education: "A hard life",
          certificates: "Surviving my parents",
          languages: ["English"]
        },
        name: "Jam Jimison",
        skills: ["Endurance", "Flexibility"]
      },
      {
        _id: "3",
        bio: {
          education: "Bad Boy Fight School",
          certificates: "Certified Bad Boy",
          languages: ["Swedish", "English"]
        },
        name: "Stang",
        skills: ["Aerobics"]
      },
      {
        _id: "4",
        bio: {
          education: "Mater Markos' Magic Academy",
          certificates: "An abuse of power",
          languages: ["German", "French", "English"]
        },
        name: "Susanna Bannion",
        skills: ["Flexibility", "Aerobics"]
      }
    );
  }
});
