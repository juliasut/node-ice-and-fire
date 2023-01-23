const express = require('express');
const { getCharacters } = require('../controllers/characterController');
const router = express.Router();

router.get('/characters', getCharacters);

module.exports = router;
