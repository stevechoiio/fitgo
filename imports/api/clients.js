import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
export const Clients = new Mongo.Collection("clients");

if (Meteor.isServer) {
  Meteor.publish("clients", function clientsPublication() {
    return Clients.find({});
  });
}
