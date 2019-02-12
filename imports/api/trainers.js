import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
export const Trainers = new Mongo.Collection("trainers");
import SimpleSchema from "simpl-schema";
new SimpleSchema({
  _id: String,
  name: String,
  email: String,
  education: String,
  languages: [String],
  skills: [String],
  imageurl: String,
  currentLocation: Object,
  "currentLocation.long": Number,
  "currentLocation.lat": Number,
  username: String
});

if (Meteor.isServer) {
  Meteor.publish("trainers", function trainersPublication() {
    return Trainers.find({});
  });
}
