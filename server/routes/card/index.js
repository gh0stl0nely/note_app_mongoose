var express = require('express');
var router = express.Router();

const getAllCards = require('../card/getAllCards');

/**
 * GET Request
 */
router.get('/', getAllCards);
// router.get('/:id', getUserByID);


/**
 * POST Request
 */

// router.post('/', addUser);
// router.post('/:id/cards', addCardToUser);
// router.post('/:id/accounts/:accountId', addAccountToUser);




module.exports = router;
