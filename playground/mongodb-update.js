// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb')

let obj = new ObjectID()
// console.log(obj);

MongoClient.connect(
  'mongodb://localhost:27017/',
  { useNewUrlParser: true },
  (err, client) => {
    let db = client.db('TodoApp')

    if (err) {
      return console.log('Unable to connect to MongoDB server')
    }

    db.collection('todos')
      .findOneAndUpdate(
        {
          _id: new ObjectID('5bc10cb40a33f1194bfdb415')
        },
        {
          $set: {
            completed: true
          }
        },
        {
          returnOriginal: false
        }
      )
      .then(result => console.log(result))
  }
)
