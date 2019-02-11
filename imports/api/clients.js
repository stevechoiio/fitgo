import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
export const Clients = new Mongo.Collection("clients");
import SimpleSchema from "simpl-schema";
new SimpleSchema({
  _id: String,
  name: String,
  email: String,
  education: String,
  languages: [String],
  skills: [String],
  trainer: Boolean,
  imageurl: String,
  currentLocation: Object,
  'currentLocation.long': Number,
  'currentLocation.lat': Number,
  // currentLocation: {
  //   long: Number,
  //   lat: Number
  // }
});

if (Meteor.isServer) {
  Meteor.publish("clients", function clientsPublication() {
    return Clients.find({});
  });
}

// Meteor.methods({
//   "clients.setUser"() {
//     Clients.update(
//       { id: this.userId },
//       {
//         $set: {
//           user: true
//         }
//       }
//     );
//   },
//   "clients.setTrainer"() {
//     Clients.update(
//       { id: this.userId },
//       {
//         $set: {
//           trainer: true
//         }
//       }
//     );
//   }

// });
