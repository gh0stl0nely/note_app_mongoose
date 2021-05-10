const User = require('../../model/user');

module.exports = async function getUserByID(req,res){    
    try {
        const { id } = req.params;
        const user = await User.findById(id).populate('accounts').populate('cards');
        res.status(200).json(user);
    } catch(e){
        res.status(404).json({
            error: e,
        });
    }
}