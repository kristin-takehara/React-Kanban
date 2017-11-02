//ROUTES --INDEX.JS

const express = require('express');
const router = express.Router();

//pull in the other routes here:

// const users = require('./users');
const cards = require('./cards');



//must give the server direction
// router.use('/users', users);
router.use('cards', cards);

module.exports = router;