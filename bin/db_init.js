const database = require('../database');

database.create().then(() => {
    database.sync(true).then(() => {
        database.seed(database).then(() => {
            console.log("Database initialized successfully");
            process.exit(0);
        });
    }); 
});
