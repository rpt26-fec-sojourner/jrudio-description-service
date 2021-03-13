const fetch = require('node-fetch');
const db = require('./db');
const seedDB = require('../server/database/seed');

let dbConnection = null;
const host = 'http:/localhost';
const port = 7878;
const baseURL = `${host}:${port}`;

/*
  BEFORE TESTS ARE RAN:
   - setup in-memory mongodb
   - setup app server
  Before each test:
   - seed db
  After each test:
   - drop collection from db
*/


beforeAll(() => {
  return db()
    .then(port => {
      // set port before connecting to db
      process.env.MONGO_PORT = port;

      return seedDB();
    }).then(() => {
      // start app server
      require('../server');
    })
    .catch(err => console.log(`could not set up db or app server: ${err}`));
});

describe('routes should return the correct data from the database', () => {
  test('should return a full listing data from /listin/:id', () => {
    return fetch(`${baseURL}/listing/1`)
      .then(resp => {
        console.log(resp.status);
      });
  });
});

