const express = require('express');
const router = express.Router();
const database = require('../database');

router.get('/', async function(req, res, next) {
    const result = await database.Pool.findAll();
    res.send(result);
});

router.get('/:poolId', async function(req, res, next) {
    const result = await database.Pool.findById(req.params.poolId);
    res.send(result);
});

router.get('/:poolId/contributions', async function(req, res, next) {
    const result = await database.Contribution.findAll({where: {poolId: req.params.poolId}});
    res.send(result);
});

module.exports = router;
