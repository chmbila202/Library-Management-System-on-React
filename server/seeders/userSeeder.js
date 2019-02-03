const userSeeder = {
  signUp: {
    fullName: 'Bilal',
    username: 'bilal7',
    password: '123456',
    email: 'bilal7@gmail.com',
    isAdmin: 1,
    passwordConfirm: '123456'
  },

  signUp2: {
    fullName: 'Muhammad Bilal Sadiq',
    username: 'usama222',
    password: '123456',
    email: 'usama222@gmail.com',
    passwordConfirm: 'helloworld'
  },

  login: {
    username: 'Dealwap',
    password: 'helloworld'
  },

  invalidLoginDetails: {
    username: 'Dealwap',
    password: 'hello'
  },

  missingPassword: {
    username: 'Dealwap',
  },

  existingUsername: {
    fullName: 'Muhammad Bilal Sadiq',
    username: 'bilal',
    password: 'helloworld',
    email: 'bilal@yahoo.com',
    passwordConfirm: 'helloworld'
  },

  existingEmail: {
    fullName: 'Muhammad Bilal Sadiq',
    username: 'mubasher',
    password: 'helloworld',
    email: 'mubasher@gmail.com',
    passwordConfirm: 'helloworld'
  },
  noFullName: {
    username: 'mubasher',
    password: 'helloworld',
    email: 'mubasher@gmail.com',
    passwordConfirm: 'helloworld'
  },
  noEmail: {
    fullName: 'Muhammad Bilal Sadiq',
    username: 'usama',
    password: 'helloworld',
    passwordConfirm: 'helloworld'
  },
  usernameMin5: {
    fullName: 'Muhammad Bilal Sadiq',
    username: 'usama',
    password: 'helloworld',
    email: 'usama@gmail.com',
    passwordConfirm: 'helloworld'
  }
};

export default userSeeder;
