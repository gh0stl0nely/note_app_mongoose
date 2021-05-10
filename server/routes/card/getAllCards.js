const Card = require('../../model/card');

module.exports = async function getAllCards(req,res){    
    try {
        const card = await Card.find({}).populate('users');
        res.status(200).json(card);
    } catch(e){
        res.status(404).json({
            error: e,
        });
    }
}