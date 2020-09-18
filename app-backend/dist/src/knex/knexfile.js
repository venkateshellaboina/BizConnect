"use strict";
// const knex = require('knex');
// let instance = null;
// class DatabaseService{
//     protected instance: any = null;
//     init(){
//        if (this.instance !== null){
//             return;
//        }
//        this.instance = knex({
//         client : 'mysql',
//         connection:{
//             host: process.env.DB_HOST,
//             port : 3306,
//             user : 'admin',
//             password : 'password',
//             database : "test"
//         }
//         ,
//         // pool : {min: 1, max: 5}
//        })
//        console.log('knex instance : ' + this.instance);
//    }
//    getInstance = () => this.instance;
// }
const db = require('knex')({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: 'admin',
        password: 'password',
        database: "test"
    },
});
module.exports = db;
