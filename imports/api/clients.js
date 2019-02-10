import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
export const Clients = new Mongo.Collection("clients");



if (Meteor.isServer) {
  Meteor.publish("clients", function clientsPublication() {
    return Clients.find({});
  });
}

Meteor.methods({
  "clients.setUser"() {
    Clients.update(
      { id: this.userId },
      {
        $set: {
          user: true
        }
      }
    );
  },
  "clients.setTrainer"() {
    Clients.update(
      { id: this.userId },
      {
        $set: {
          trainer: true
        }
      }
    );
  }
});
