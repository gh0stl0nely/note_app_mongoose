var express = require('express');
var router = express.Router();

const addUser = require('./addUser');
const addCardToUser = require('./addCardToUser');
const addAccountToUser = require('./addAccountToUser');
const getAllUsers = require('./getAllUsers');
const getUserByID = require('./getUserByID');


/**
 * GET Request
 */
router.get('/', getAllUsers);
router.get('/:id', getUserByID);


/**
 * POST Request
 */

/** Create a new User */
router.post('/', addUser);
router.post('/:id/cards', addCardToUser);
router.post('/:id/accounts', addAccountToUser);




module.exports = router;
