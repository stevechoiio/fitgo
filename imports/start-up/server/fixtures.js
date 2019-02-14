import { Clients } from '../../api/clients';
import { Trainers } from '../../api/trainers';
import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  //   // add data to the database
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
      skills: ['strength building'],
      currentLocation: {
        latitude: 49.265123,
        longitude: -123.248
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
      skills: ['strength building', 'power lifting'],
      currentLocation: {
        latitude: 49.26864,
        longitude: -123.133829
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
        latitude: 49.10325,
        longitude: -122.65924
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
        latitude: 49.150371,
        longitude: -123.11103
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
        latitude: 49.2523,
        longitude: -123.241
      },
      username: 'timmy4',
      clients: []
    });
  }

  if (Meteor.users.find().count() === 0) {
    user = Accounts.createUser({
      email: 'timtim@gmail.com',
      password: 'timtimtim',
      username: 'timmy'
    });
  }
});
