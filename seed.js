
const seed = (db) => {
    let promise = db.User.bulkCreate([
        {
            name: 'John Snow',
            avatarUrl: 'https://typeset-beta.imgix.net/rehost%2F2016%2F9%2F13%2F0a55628f-9b0a-40eb-b39d-68b15eea7e4f.jpg'
        },
        {
            name: 'Sansa Stark',
            avatarUrl: 'https://spontaneityreview.files.wordpress.com/2013/04/sansa-stark-women-of-westeros-30785217-400-610.jpg'
        },
        {
            name: 'Arya Stark',
            avatarUrl: 'https://melissareyes.files.wordpress.com/2015/04/arya-stark.jpg'
        },
        {
            name: 'Tyrion Lannister',
            avatarUrl: 'https://biffbampop.files.wordpress.com/2014/04/tyrion-lannister-pic1.jpg'
        },
        {
            name: 'Cersei Lannister',
            avatarUrl: 'http://www.zachofalltradesblog.com/wp-content/uploads/2014/03/cersei.jpg'
        },
        {
            name: 'Daenerys Targaryen',
            avatarUrl: 'http://images5.fanpop.com/image/photos/30600000/Daenerys-Targaryen-daenerys-targaryen-30631700-500-628.jpg'
        },
        {
            name: 'Catelyn Stark',
            avatarUrl: 'http://assets.viewers-guide.hbo.com/larges1-ep1-people-avatar-rgb-stark-tully-catelyn-1024x1024.jpg'
        }
    ]);

    promise = promise.then(() => {
        return db.User.findOne({where: {name: 'Cersei Lannister'}}).then((user) => {
            return user.createPool({name: 'Red Wedding', goalAmountValue: 10000, goalAmountCurrency: 'USD'});
        });
    });

    return promise;
};

module.exports = seed;