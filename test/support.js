'use strict';

const url = require('url');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const spawn = require('child_process').spawn;
const connection = require('knex');

chai.should();
chai.use(chaiAsPromised);

global.chaiAsPromised = chaiAsPromised;
global.expect = chai.expect;
global.dbName = 'grocery_list_test';

const dbConfig = {
  client: 'pg',
  connection: url.resolve(process.env.DATABASE_URL, dbName)
};

/*
  Before each `it` function runs (each "example") execute these steps in this order:

  - if the database exists, drop it using the `dropdb` shell command
  - create a new database using the `createdb` shell command
  - create a global `knex` variable that is connected to that database
*/
beforeEach(() => {
  return resetDb().then(() => global.knex = connection(dbConfig))
});

// After each example, destroy the knex connection pool, so that future tests can reconnect
afterEach(() => knex.destroy());


function resetDb(cb) {
  console.log('Reset url', process.env.DATABASE_URL + '/postgres', '---', url.resolve(process.env.DATABASE_URL, 'postgres'));
  let knexTmp = connection({
    client: 'pg',
    connection: process.env.DATABASE_URL + '/postgres'
  })

  return new Promise((resolve, reject) => {
    knexTmp.raw(`DROP DATABASE IF EXISTS ${dbName};`)
      .then(result => {
        console.log(`Dropped ${dbName}`)
        return knexTmp.raw(`CREATE DATABASE ${dbName};`)
      })
      .then(result => {
        console.log(`Created ${dbName}`)
        knexTmp.destroy()
        resolve()
      })
      .catch((err) => {
        console.log(`Error resetting ${dbName}`, err)
        reject(err)
      })
  })
}
