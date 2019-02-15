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
      email: 'matt@name.com',
      goals:
        'I will even throw in “tone,” “sculpt,” and “firm up” so we can put those ridiculous terms to bed.',
      username: 'matty',
      trainers: ['1', '2']
    });
    Clients.insert({
      _id: '2',
      name: 'Jen',
      email: 'jen@name.com',
      goals: 'Improve endurance/conditioning.',
      username: 'jenny',
      trainers: ['1', '2']
    });
    Clients.insert({
      _id: '3',
      name: 'Tim',
      email: 'tim@name.com',
      goals: 'Improve athletic skills.',
      username: 'timmy',
      trainers: ['3']
    });
    Clients.insert({
      _id: '4',
      name: 'Steve',
      email: 'steve@namne.com',
      goals: 'Improve joint flexibility.',
      username: 'stevie',
      trainers: ['2', '3', '4', '5']
    });
  }

  if (Trainers.find().count() === 0) {
    Trainers.insert({
      _id: '1',
      name: 'Steve',
      phone: '664-211-2231',
      email: 'steve@trainer.com',
      education: 'BSc (Hons) Physiotherapy – (University of Bradford)',
      languages: ['Korean', 'English'],
      skills: ['strength training', 'body building'],
      currentLocation: {
        latitude: 49.265123,
        longitude: -123.248
      },
      username: 'steven',
      clients: ['1']
    });
    Trainers.insert({
      _id: '2',
      name: 'Tim',
      phone: '664-211-2232',
      email: 'timtim@trainer.com',
      education: 'BSc Kinesiology (University of British Columbia)',
      languages: ['Vietnamese', 'English'],
      skills: ['strength training', 'power lifting'],
      currentLocation: {
        latitude: 49.26864,
        longitude: -123.133829
      },
      username: 'timmy',
      clients: ['1']
    });
    Trainers.insert({
      _id: '3',
      name: 'Sid',
      phone: '664-211-2233',
      email: 'sid@trainer.com',
      education: 'MSc Physiotherapy (University of Sydney)',
      languages: ['English'],
      skills: ['yoga', 'running'],
      currentLocation: {
        latitude: 49.10325,
        longitude: -122.65924
      },
      username: 'sid',
      clients: []
    });
    Trainers.insert({
      _id: '4',
      name: 'Matt',
      phone: '664-211-2234',
      email: 'matt@gmail.com',
      education: 'MPT Physiotherapy (University of British Columbia)',
      languages: ['Mandarin', 'English'],
      skills: ['crossfit'],
      currentLocation: {
        latitude: 49.150371,
        longitude: -123.11103
      },
      username: 'matt',
      clients: []
    });
    Trainers.insert({
      _id: '5',
      name: 'Jen',
      phone: '664-211-2235',
      email: 'jen@trainer.com',
      education: 'Bachelor of Science (B.Kin) (Simon Fraser University)',
      languages: ['Cantonese', 'English'],
      skills: ['power lifting', 'yoga'],
      currentLocation: {
        latitude: 49.2523,
        longitude: -123.241
      },
      username: 'jen',
      clients: []
    });
  }

  if (Meteor.users.find().count() === 0) {
    Accounts.createUser({
      email: 'tim@name.com',
      password: 'timtimtim',
      username: 'timmy'
    });
    Accounts.createUser({
      email: 'jen@name.com',
      password: 'jenjenjen',
      username: 'jenny'
    });
  }
});
