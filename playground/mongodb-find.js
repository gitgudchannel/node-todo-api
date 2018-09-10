// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

let obj = new ObjectID();
// console.log(obj);

MongoClient.connect(
  'mongodb://localhost:27017/',
  { useNewUrlParser: true },
  (err, client) => {
    let db = client.db('TodoApp');

    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Users')
      .find({ name: 'Josip Ledic' })
      .count()
      .then(
        count => {
          console.log('Todos count: ' + count);
        },
        err => {
          console.log('Unable to fetch todos', e);
        }
      );

    // client.close();
  }
);
