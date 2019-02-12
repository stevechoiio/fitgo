import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
export const Clients = new Mongo.Collection("clients");
import SimpleSchema from "simpl-schema";
new SimpleSchema({
  _id: String,
  name: String,
  email: String,
  languages: [String],
  skills: [String],
  username: String
});

if (Meteor.isServer) {
  Meteor.publish("clients", function clientsPublication() {
    return Clients.find({});
  });
}

// "clients.addTrainers"() {
//   Clients.update(
//     { id: this.userId },
//     {
//       $push: {


//       }
//     }

//   )
// }