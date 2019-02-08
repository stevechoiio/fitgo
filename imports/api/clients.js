import { Mongo } from "meteor/mongo";
import Meteor from "meteor/meteor";

if (Meteor.isServer) {
  Meteor.publish("clients", function clientsPublication() {
    return Clients.find({ owner: this.userId });
  });
}

export const Clients = new Mongo.Collection("clients");
