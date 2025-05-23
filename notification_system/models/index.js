const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.json'
});

sequelize
  .authenticate()
  .then(() => console.log('Database connected.'))
  .catch((err) => console.error('Database connection failed:', err));

module.exports = sequelize;
