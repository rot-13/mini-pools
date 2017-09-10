const seed = async (db) => {
    await db.User.bulkCreate([
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
        },
        {
            name: 'Roose Bolton',
            avatarUrl: 'https://vignette.wikia.nocookie.net/gameofthrones/images/2/26/Profile-RooseBolton.png/revision/latest/scale-to-width-down/350?cb=20170728090234'
        }
    ]);

    let cersei = await db.User.findOne({where: {name: 'Cersei Lannister'}});
    let bolton = await db.User.findOne({where: {name: 'Roose Bolton'}});
    
    let redWedding = await cersei.createPool({name: 'Red Wedding', goalAmountValue: 10000, goalAmountCurrency: 'USD'}); 

    await db.Contribution.create({
        amountValue: 1000, amountCurrency: 'USD', note: 'The Lannisters send their regards.',
        contributorId: bolton.get('id'), poolId: redWedding.get('id')
    });

    await db.Contribution.create({
        amountValue: 5000, amountCurrency: 'USD', note: 'Mazal Tov!',
        contributorId: cersei.get('id'), poolId: redWedding.get('id'),
    });
};

module.exports = seed;