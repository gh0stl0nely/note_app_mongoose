const User = require('../../model/user');

module.exports = async function getAllUsers(req,res){    
    try {
        const user = await User.find({}).populate('cards');
        res.status(200).json(user);
    } catch(e){
        res.status(404).json({
            error: e,
        });
    }
}