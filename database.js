const defineModels = require('./models');
const seed = require('./seed');

const db = {};
db.name = 'mini_pools';
db.Sequelize = require('sequelize');

const connectionUrl = (dbName) => {
    return process.env.DATABASE_URL || `postgres://ifeins@localhost:5432/${dbName}`
}

db.create = async () => {
    const sequelize = new db.Sequelize(connectionUrl(''));
    try {
        await sequelize.query(`CREATE DATABASE "${db.name}"`);
    } catch (err) {
        // ignore if database already exist
    }
}

db.sync = (force) => {
    db.sequelize = new db.Sequelize(connectionUrl(db.name));
    defineModels(db);

    return db.sequelize.sync({force: force});
}

db.seed = () => {
    return seed(db);
}

module.exports = db;
