import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import SimpleSchema from "simpl-schema";
export const Trainers = new Mongo.Collection("trainers");

const Schemas = {};

Schemas.Trainers = new SimpleSchema({
  _id: {
    type: String
  },
  email: {
    type: String
  },
  name: {
    type: String
  },
  phone: {
    type: String
  },
  education: {
    type: String
  },
  languages: {
    type: String
  },
  skills: {
    type: Array
  },
  "skills.$": {
    type: String
  },
  currentLocation: {
    type: Object
  },
  "currentLocation.longitude": {
    type: Number
  },
  "currentLocation.latitude": {
    type: Number
  },
  username: {
    type: String
  },
  clients: {
    type: Array
  },
  "clients.$": {
    type: String
  }
});

Trainers.attachSchema(Schemas.Trainers);

if (Meteor.isServer) {
  Meteor.publish("trainers", function trainersPublication() {
    return Trainers.find({});
  });
}

Trainers.allow({
  insert: () => {
    return true;
  }
});

Meteor.methods({
  "trainers.addClientsToTrainers"(clientId, trainerId) {
    Trainers.update(
      { _id: trainerId },
      {
        $push: {
          clients: clientId
        }
      }
    );
  },
  "trainers.removeClientsFromTrainers"(clientId, trainerId) {
    Trainers.update(
      { _id: trainerId },

      { $pull: { clients: clientId } }
    );
  }
});
