import { Clients } from "../../api/clients";
import { Meteor } from "meteor/meteor";
Meteor.startup(() => {
  // add data to the database
  if (Clients.find().count() === 0) {
    Clients.insert({
      name: "Steve"
    });
  }
});
