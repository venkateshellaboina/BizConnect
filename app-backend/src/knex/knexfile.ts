
const db = require('knex')({
    client : 'mysql',
    connection:{
        host: process.env.DB_HOST,
        port : 3306,
        user : 'admin',
        password : 'password',
        database : "test"
    },
});
module.exports = db;

  