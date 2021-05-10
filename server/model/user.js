const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        minLength: 5,
        required: true
    },
    dob: Date,
    gender: String,
    accounts: [{
        type: Schema.Types.ObjectId,
        ref: "Account",
    }],
    cards:[{
        type: Schema.Types.ObjectId,
        ref: "Card"
    }]
});

module.exports = mongoose.model("User", UserSchema);