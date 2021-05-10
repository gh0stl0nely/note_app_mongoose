const Account = require('../../model/account');

module.exports = async function getAllAccounts(req,res){    
    try {
        const account = await Account.find({}).populate('users');
        res.status(200).json(account);
    } catch(e){
        res.status(404).json({
            error: e,
        });
    }
}