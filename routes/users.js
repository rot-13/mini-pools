const express = require('express');
const router = express.Router();
const database = require('../database');

router.get('/', async function(req, res, next) {
    const result = await database.User.findAll();
    res.send(result);
});

router.get('/:userId', async function(req, res, next) {
    const result = await database.User.findById(req.params.userId);
    res.send(result);
});

router.get('/:userId/pools', async function(req, res, next) {
    const result = await database.Pool.findAll({where: {creatorId: req.params.userId}});
    res.send(result);
});

router.get('/:userId/contributions', async function(req, res, next) {
    const result = await database.Contribution.findAll({where: {contributorId: req.params.userId}});
    res.send(result);
});

module.exports = router;
