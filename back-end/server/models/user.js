const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: true,
        unique: true
    }
}, {timestamps: true});

const User = mongoose.model("users", userSchema);

module.exports = User;