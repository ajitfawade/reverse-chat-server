import User from '../models/User';

export const getUser = id => {
  return new Promise((resolve, reject) => {
    User.find({ _id: id }).exec((userError, user) => {
      if (!userError) {
        resolve(user);
      } else {
        reject(userError);
      }
    });
  });
};

export const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    User.find().exec((allUsersError, users) => {
      if (!allUsersError) {
        resolve(users);
      } else {
        reject(allUsersError);
      }
    });
  });
};

export const createUser = userData => {
  return new Promise((resolve, reject) => {
    const user = new User(userData);
    user.save(saveError => {
      if (!saveError) {
        resolve(user);
      } else {
        reject(saveError);
      }
    });
  });
};
