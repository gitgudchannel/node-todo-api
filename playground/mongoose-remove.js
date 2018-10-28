const { ObjectID } = require('mongodb')

const { mongoose } = require('../server/db/mongoose')
const { Todo } = require('../server/models/todo')
const { User } = require('../server/models/user')

Todo.remove({}).then(result => {
  console.log(result)
})

Todo.findByIdAndRemove('5bd4a62cc9494e048449ef07').then(todo => {
  console.log(todo)
})
