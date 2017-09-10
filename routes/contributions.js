const express = require('express');
const router = express.Router();
const database = require('../database');

router.get('/', async function(req, res, next) {
    const result = await database.Contribution.findAll();
    res.send(result);
});

router.get('/:contributionId', async function(req, res, next) {
    const result = await database.Contribution.findById(req.params.contributionId);
    res.send(result);
});

module.exports = router;
