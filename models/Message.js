import mongoose from 'mongoose';
import shortid from 'shortid';

const schemaOptions = {
  timeStamps: true,
  toJSON: {
    virtuals: true
  }
};

const messageSchema = new mongoose.Schema(
  {
    id: String,
    text: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  schemaOptions
);

messageSchema.pre('save', function(next) {
  const message = this;

  if (!message.id) {
    message.id = shortid.generate() + shortid.generate();
  }
  next();
});

const Message = mongoose.model('Message', messageSchema);
export default Message;
