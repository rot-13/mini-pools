const defineModels = (db) => {
    db.User = db.sequelize.define('user', {
        name: {type: db.Sequelize.STRING, allowNull: false},
        avatarUrl: db.Sequelize.STRING,
        extra: db.Sequelize.JSONB,
    });

    db.Pool = db.sequelize.define('pool', {
        name: {type: db.Sequelize.STRING, allowNull: false, unique: 'compositeIndex'},
        goalAmountValue: {type: db.Sequelize.INTEGER, allowNull: false, min: 1},
        goalAmountCurrency: {type: db.Sequelize.STRING, allowNull: false},
        extra: db.Sequelize.JSONB,
    });

    db.Contribution = db.sequelize.define('contribution', {
        amountValue: {type: db.Sequelize.INTEGER, allowNull: false, min: 1},
        amountCurrency: {type: db.Sequelize.STRING, allowNull: false},
        note: db.Sequelize.TEXT,
        extra: db.Sequelize.JSONB,
    });
    
    db.User.hasMany(db.Pool, {foreignKey: 'creatorId'});
    db.Pool.belongsTo(db.User, {as: 'creator'});
    db.Pool.hasMany(db.Contribution);
    db.Contribution.belongsTo(db.Pool);
    db.Contribution.belongsTo(db.User, {as: 'contributor'});
}

module.exports = defineModels;