const mongoose = require('mongoose');
const shortid = require('shortid');

const schemaOptions = {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
};

const messageSchema = new mongoose.Schema({
    id: String,
    text: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
}, schemaOptions);

userSchema.pre('save', function (next) {
    const message = this;

    if (!message.id) {
        message.id = shortid.generate() + shortid.generate();
    }
});

const Message = mongoose.model('Message', userSchema);

module.exports = Message;