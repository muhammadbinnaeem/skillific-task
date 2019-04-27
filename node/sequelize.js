const Sequelize = require('sequelize');
const notificationsModel = require('./models/notifications');

const database = 'skillific';
const user = 'root';
const password = '';
const host = 'localhost';

const sequelize = new Sequelize(database, user, password, {
  host: host,
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const Notifications = notificationsModel(sequelize, Sequelize);
// create table(s)
sequelize.sync({ force: true }).then(() => {
  console.log(`table created!`);
});

module.exports = {
  Notifications
};
