const defineModels = (db) => {
    db.User = db.sequelize.define('user', {
        name: {type: db.Sequelize.STRING, allowNull: false},
        avatarUrl: db.Sequelize.STRING,
        extra: db.Sequelize.JSONB
    });

    db.Pool = db.sequelize.define('pool', {
        name: {type: db.Sequelize.STRING, allowNull: false, unique: 'compositeIndex'},
        goalAmountValue: {type: db.Sequelize.INTEGER, allowNull: false, min: 1},
        goalAmountCurrency: {type: db.Sequelize.STRING, allowNull: false},
        extra: db.Sequelize.JSONB,
        creatorId: {
            type: db.Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: db.User,
                key: 'id',
                deferrable: db.Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        }
    });

    db.Contribution = db.sequelize.define('contribution', {
        amountValue: {type: db.Sequelize.INTEGER, allowNull: false, min: 1},
        amountCurrency: {type: db.Sequelize.STRING, allowNull: false},
        note: db.Sequelize.TEXT,
        extra: db.Sequelize.JSONB,
        contributorId: {
            type: db.Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: db.User,
                key: 'id',
                deferrable: db.Sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        }
    });
}

module.exports = defineModels;