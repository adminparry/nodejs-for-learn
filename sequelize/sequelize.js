const Sequelize = require('sequelize');
const sequelize = new Sequelize('admin', 'admin', 'admin', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
  // storage: 'path/to/database.sqlite',

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  // operatorsAliases: false
});



// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

