const Sequelize = require('sequelize');

const sequelize = new Sequelize('mini_pools', 'ifeins', '', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 30,
        min: 0, 
        idle: 10000
    }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = sequelize.define('user', {
    name: {type: Sequelize.STRING, allowNull: false},
    avatarUrl: Sequelize.STRING,
    extra: Sequelize.JSONB
});

db.Pool = sequelize.define('pool', {
    name: {type: Sequelize.STRING, allowNull: false, unique: 'compositeIndex'},
    goalAmountValue: {type: Sequelize.INTEGER, allowNull: false, min: 1},
    goalAmountCurrency: {type: Sequelize.STRING, allowNull: false},
    extra: Sequelize.JSONB,
    creatorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: db.User,
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    }
});

db.Contribution = sequelize.define('contribution', {
    amountValue: {type: Sequelize.INTEGER, allowNull: false, min: 1},
    amountCurrency: {type: Sequelize.STRING, allowNull: false},
    note: Sequelize.TEXT,
    extra: Sequelize.JSONB,
    contributorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: db.User,
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    }
});

module.exports = db;
