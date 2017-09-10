const defineModels = require('./models');
const seed = require('./seed');

const db = {};
db.name = 'mini_pools';
db.Sequelize = require('sequelize');

db.create = () => {
    const sequelize = new db.Sequelize('postgres', 'ifeins', '', {host: 'localhost', dialect: 'postgres'});
    let promise = sequelize.query(`DROP DATABASE IF EXISTS "${db.name}"`);
    promise = promise.then(() => {
        return sequelize.query(`CREATE DATABASE "${db.name}"`);
    });

    return promise;
}

db.sync = () => {
    db.sequelize = new db.Sequelize(db.name, 'ifeins', '', {
        logging: console.log,
        host: 'localhost',
        dialect: 'postgres',
        pool: {
            max: 30,
            min: 0, 
            idle: 10000
        }
    });
    defineModels(db);

    return db.sequelize.sync();
}

db.seed = () => {
    return seed(db);
}

module.exports = db;
