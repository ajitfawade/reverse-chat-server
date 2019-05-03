const mongoose = require('mongoose');
const shortid = require('shortid');

const schemaOptions = {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
};

const userSchema = new mongoose.Schema({
    id: String,
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    picture: String
}, schemaOptions);

userSchema.pre('save', function (next) {
    const user = this;

    if (!user.id) {
        user.id = shortid.generate() + shortid.generate();
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;