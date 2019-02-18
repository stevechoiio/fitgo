import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import SimpleSchema from "simpl-schema";
export const Clients = new Mongo.Collection("clients");

const Schemas = {};

Schemas.Clients = new SimpleSchema({
  _id: {
    type: String
  },
  name: {
    type: String
  },
  email: {
    type: String
  },
  goals: {
    type: String
  },
  username: {
    type: String
  },
  trainers: {
    type: Array
  },
  "trainers.$": {
    type: String
  }
});

Clients.attachSchema(Schemas.Clients);

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
    if (!this.userId) {
      throw new Meteor.Error(
        "clients.addTrainersToClients.not-authorized",
        "You are not allowed to add Trainers for other Users."
      );
    }
    Clients.update(
      { _id: clientId },
      {
        $push: {
          trainers: trainerId
        }
      }
    );
  },
  "clients.deleteTrainersfromClients"(trainerId, clientId) {
    if (!this.userId) {
      throw new Meteor.Error(
        "clients.deleteTrainersfromClients.not-authorized",
        "You are not allowed to remove Trainers for other Users."
      );
    }
    Clients.update({ _id: clientId }, { $pull: { trainers: trainerId } });
  }
});
