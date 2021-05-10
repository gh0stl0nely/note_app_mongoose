const User = require('../../model/user');
const Card = require('../../model/card');
const mongoose = require('mongoose');

// We may want to add existing card to user
// But we can keep it simple for now

/// BEST APPROACH: HAVE another routes like addNewCardToUser or addExistingCardToUser

module.exports = async function addCardToUser(req,res){    
    try {
        const { id } = req.params;
        const {
            number,
            pin,
        } = req.body;

        const card = new Card({
            _id: new mongoose.Types.ObjectId(),
            number,
            pin,
            users:[],
            accounts: [],
        });

        await card.save();
        // _id: "609891ebdd312d5e686521b3"
        const user = await User.findOneAndUpdate({
            _id: id
        }, {
            $push: {
                cards: card
            }
        }, {
            new: true
        });
        res.status(200).json(user);
    } catch(e){
        console.log(e);
        res.status(404).json({
            error: e,
        });
    }
}