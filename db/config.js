const Sequelize = require('sequelize');

let sequelize = null;

if(process.env.DB_CONNECTION_STRING){
    sequelize = new Sequelize(process.env.DB_CONNECTION_STRING,{
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        logging: false
    })
} else{
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        logging: false
    });
}


module.exports = sequelize;
