const mongoose = require('mongoose');
const Post = require('./post');
const User = require('./user');

const mongoDbUrl = process.env.MONGODB_URL || 'mongodb://0.0.0.0/acebook';
const mongoDbUrlTest = 'mongodb://0.0.0.0/acebook_test';

const connectToMongoDb = (dbUrl) => {
  mongoose
    .connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(`Successfully connected to MongoDB (${dbUrl})`))
    .catch((error) => {
      throw new Error(`Something went wrong (${error.message})`);
    });
};

const seedDB = async (model, data) => {
  await model.deleteMany({});
  await model.insertMany(data);
};

const users = [
  {
    _id: '63c5af31fc2b1ea9263a6ba1',
    name: 'Bill',
    email: 'bill@bill.com',
    password: 'bill',
    age: 22,
    avatar: '/images/bill-avatar.png',
    bio: 'So many of my smiles are because of you',
    hometown: 'London',
    profession: 'Artist',
    relationship_status: 'Single',
    friends: [],
  },

  {
    _id: '63c5af31fc2b1ea9263a6ba2',
    name: 'Jeff',
    email: 'jeff@jeff.com',
    password: 'jeff',
    age: 25,
    avatar: '/images/jeff-avatar.png',
    bio: 'My life is better than my daydreams',
    hometown: 'Los Angeles',
    profession: 'Tycoon',
    relationship_status: 'Single',
    friends: [],
  },

  {
    _id: '63ca882d5dbccc7296e7876f',
    name: 'Susan',
    email: 'susan@susan.com',
    password: 'susan',
    age: 32,
    avatar: '/images/susan-avatar.png',
    bio: 'Constantly searching for views that take my breath away',
    hometown: 'New York',
    profession: 'Marketing Manager',
    relationship_status: 'Married',
    friends: [],
  },
];

const posts = [
  {
    _id: '63c5b11027eaf4a3bcc16d61',
    user_id: '63c5af31fc2b1ea9263a6ba2',
    message: 'Hello, world!',
    likes: [],
    comments: [],
  },

  {
    _id: '63c5b17727eaf4a3bcc16d70',
    user_id: '63c5af31fc2b1ea9263a6ba1',
    message: 'Hey, gang!',
    likes: [],
    comments: [],
  },

  {
    _id: '63ca88d672630172ff7f0fe0',
    user_id: '63ca882d5dbccc7296e7876f',
    message: 'How are you guys?',
    likes: [],
    comments: [],
  },
];

connectToMongoDb(mongoDbUrl);

seedDB(User, users)
  .then(() => seedDB(Post, posts))
  .then(() => {
    console.log('Database seeded!');
    console.log('Hold your head up as you travel the path ahead...');
    mongoose.connection.close();
  });
