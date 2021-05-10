const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    users: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    }],
});

module.exports = mongoose.model("Account", AccountSchema);