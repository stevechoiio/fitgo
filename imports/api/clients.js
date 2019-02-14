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

Clients.allow({
  insert: () => {
    return true;
  }
});

Meteor.methods({
  "clients.addTrainersToClients"(trainerId, clientId) {
    console.log("adding trainers to clients");
    Clients.update(
      { _id: clientId },
      {
        $push: {
          trainers: trainerId
        }
      }
    );
  }
});
