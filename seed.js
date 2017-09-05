
const seed = (db) => {
    return db.User.create({
        name: 'John Smith',
        avatarUrl: 'https://www.google.ie/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
    });
};

module.exports = seed;