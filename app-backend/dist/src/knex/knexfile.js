"use strict";
const db = require('knex')({
    client: 'mysql',
    connection: {
        host: 'dev.cf4kfzd8lktx.ap-south-1.rds.amazonaws.com',
        port: 3306,
        user: 'admin',
        password: 'password',
        database: "test"
    }
});
module.exports = db;
