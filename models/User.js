import mongoose from 'mongoose';
import shortid from 'shortid';

const schemaOptions = {
  timeStamps: true,
  toJSON: {
    virtuals: true
  }
};

const userSchema = new mongoose.Schema(
  {
    id: String,
    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    picture: String,
    short_name: String,
    facebookId: String
  },
  schemaOptions
);

userSchema.pre('save', function(next) {
  const user = this;

  if (!user.id) {
    user.id = shortid.generate() + shortid.generate();
  }
  next();
});

const User = mongoose.model('User', userSchema);
export default User;
