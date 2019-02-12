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
  username: String,
  trainers: [String]
});

if (Meteor.isServer) {
  Meteor.publish("clients", function clientsPublication() {
    return Clients.find({});
  });
}

Meteor.methods({
  "clients.addTrainersToClients"(trainerId, clientId) {
    Clients.update(
      { id: clientId },
      {
        $push: {
          trainers: trainerId
        }
      }
    );
  }
});
