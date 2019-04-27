module.exports = (sequelize, type) => {
  return sequelize.define('notifications', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    message: type.TEXT
  });
};
