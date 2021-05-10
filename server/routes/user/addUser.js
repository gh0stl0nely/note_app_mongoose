const mongoose = require('mongoose');
const User = require('../../model/user');

module.exports = async function addUser(req,res){
    const {
        name,
        dob,
        gender,
    } = req.body;

    const newUser = new User({
        _id: new mongoose.Types.ObjectId(),
        name,
        dob,
        gender,
        accounts: [],
        cards: [],
    });

    try {
        const user = await newUser.save();
        res.status(200).json(user);
    } catch(e){
        res.status(404).json({
            error: e,
        });
    }
}