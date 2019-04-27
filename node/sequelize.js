const Sequelize = require('sequelize');
const notificationsModel = require('./models/notifications');

const sequelize = new Sequelize('skillific', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const Notifications = notificationsModel(sequelize, Sequelize);

sequelize.sync({ force: true }).then(() => {
  console.log(`Database & tables created!`);
});

module.exports = {
  Notifications
};
