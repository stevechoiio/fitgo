import { Clients } from '../../api/clients';
import { Trainers } from '../../api/trainers';
import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  //   // add data to the database
  //Languages only for the clients
  if (Clients.find().count() === 0) {
    Clients.insert({
      _id: '1',
      name: 'Matt',
      email: 'matt@gmail.com',
      languages: ['Chinese', 'English'],
      skills: ['Strength Building', 'Balance Training'],
      username: 'matty',
      trainers: []
    });
    Clients.insert({
      _id: '2',
      name: 'Jen',
      email: 'jen@gmail.com',
      languages: ['Chinese', 'English'],
      skills: ['Strength Building', 'Balance Training'],
      username: 'jenny',
      trainers: []
    });
  }

  if (Trainers.find().count() === 0) {
    Trainers.insert({
      _id: '1',
      name: 'Steve',
      email: 'steve@gmail.com',
      education: 'UBC Kinesiology',
      languages: ['Korean', 'English'],
      skills: ['Strength Building'],
      currentLocation: {
        long: -122.751125,
        lat: 49.008712
      },
      username: 'steven',
      clients: [1, 2]
    });
    Trainers.insert({
      _id: '2',
      name: 'Tim',
      email: 'timtim@gmail.com',
      education: 'UBC Kinesiology',
      languages: ['Vietnamese', 'English'],
      skills: ['Strength Building'],
      currentLocation: {
        long: -122.751125,
        lat: 48.028712
      },
      username: 'timmy',
      clients: []
    });
    Trainers.insert({
      _id: '3',
      name: 'Tim',
      email: 'timtim@gmail.com',
      education: 'UBC Kinesiology',
      languages: ['Vietnamese', 'English'],
      skills: ['yoga'],
      currentLocation: {
        long: -123.751125,
        lat: 49.044233
      },
      username: 'timmy2',
      clients: []
    });
    Trainers.insert({
      _id: '4',
      name: 'Tim',
      email: 'timtim@gmail.com',
      education: 'UBC Kinesiology',
      languages: ['Vietnamese', 'English'],
      skills: ['crossfit'],
      currentLocation: {
        long: 123.123425,
        lat: 41.008712
      },
      username: 'timmy3',
      clients: []
    });
    Trainers.insert({
      _id: '5',
      name: 'Tim',
      email: 'timtim@gmail.com',
      education: 'UBC Kinesiology',
      languages: ['Vietnamese', 'English'],
      skills: ['body building'],
      currentLocation: {
        long:  -114.756665,
        lat: 45.006612
      },
      username: 'timmy4',
      clients: []
    });
  }

  if (Meteor.users.find().count() === 0) {
     Accounts.createUser({
      email: 'timtim@gmail.com',
      password: 'timtimtim',
      username: 'timmy'
    });
     Accounts.createUser({
      email: 'jenjen@gmail.com',
      password: 'jenjenjen',
      username: 'jenny'
    });
  }
});
