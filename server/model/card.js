const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CardSchema = new Schema({
    _id: Schema.Types.ObjectId,
    number: String,
    pin: String,
    users: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    accounts: [{
        type: Schema.Types.ObjectId,
        ref: "Account"
    }]
});

module.exports = mongoose.model("Card", CardSchema);