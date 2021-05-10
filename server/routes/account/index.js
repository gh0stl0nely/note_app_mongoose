var express = require('express');
var router = express.Router();

const getAllAccounts = require('./getAllAccounts');
// const getUserByID = require('./getUserByID');


/**
 * GET Request
 */
router.get('/', getAllAccounts);
// router.get('/:id', getUserByID);


// /**
//  * POST Request
//  */

// /** Create a new User */
// router.post('/', addUser);
// router.post('/:id/cards', addCardToUser);
// router.post('/:id/accounts', addAccountToUser);




module.exports = router;
