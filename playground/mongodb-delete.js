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

    // deleteMany
    /* db.collection('Todos')
      .deleteMany({ text: 'eat lunch' })
      .then(res => {
        console.log(res);
      }); */
    // deleteOne
    // db.collection('Todos').deleteOne({ text: 'eat lunch' });
    // findOneAndDelete
    db.collection('Todos')
      .findOneAndDelete({ text: 'eat lunch' })
      .then(res => {
        console.log(res);
      });
    // client.close();
  }
);
