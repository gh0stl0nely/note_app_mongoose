const User = require('../../model/user');
const Account = require('../../model/account');
const mongoose = require('mongoose');

// We may want to add existing card to user
// But we can keep it simple for now

/// BEST APPROACH: HAVE another routes like addNewAccountToUser or addExistingAccountToUser

module.exports = async function addAccountToUser(req,res){    
    try {
        const { id } = req.params;
        const {
            name
        } = req.body;

        // In Production, can find the account by ID (ideally, account number)
        const account = new Account({
            _id: new mongoose.Types.ObjectId(),
            name,
            users:[],
        });
        await account.save();
        const user = await User.findOneAndUpdate({
            _id: id,
        }, {
            $push: {
                accounts: account
            }
        }, {
            new: true
        });
        res.status(200).json(user);
    } catch(e){
        res.status(404).json({
            error: e,
            msg: "Account not found"
        });
    }
}