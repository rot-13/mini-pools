const express = require('express');
const router = express.Router();
const database = require('../database');

const poolFetchOptions = () => {
    const options = {
        include: [{
            model: database.User,
            as: 'creator'
        }]
    }
    return options
}

router.get('/', async function(req, res, next) {
    let result = await database.Pool.findAll(poolFetchOptions());
    res.send(result);
});

router.post('/', async function(req, res, next) {
    const result = await database.Pool.create(req.body);
    res.send(result);
});

router.get('/:poolId', async function(req, res, next) {
    const result = await database.Pool.findById(req.params.poolId, poolFetchOptions());
    res.send(result);
});

router.get('/:poolId/contributions', async function(req, res, next) {
    const result = await database.Contribution.findAll({where: {poolId: req.params.poolId}});
    res.send(result);
});

router.post('/:poolId/contributions', async function(req, res, next) {
    const params = req.body;
    params.poolId = req.params.poolId;
    const result = await database.Contribution.create(params);
    res.send(result);
});

module.exports = router;
