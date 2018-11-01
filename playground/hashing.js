const { SHA256 } = require('crypto-js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

let password = '12345678'
// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash)
//   })
// })

let hashedP = '$2a$10$9HPKtmKucORGbny1/Yhs0./WvNPUwPlJV4xkEYlQ0wBs0QucDgwDu'
bcrypt.compare(password, hashedP, (err, res) => {
  console.log(res)
})

// let data = {
//   id: 10
// }

// let token = jwt.sign(data, '12345678')
// console.log(token)

// const decoded = jwt.verify(token, '12345678')
// console.log(decoded)

// let message = 'I am user number 3'
// let hash = SHA256(message).toString()

// console.log(`Message ${message}`)
// console.log(`Hash ${hash}`)

// let data = {
//   id: 4
// }

// let token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// token.data.id = 4
// token.hash = SHA256(JSON.stringify(token.data)).toString()

// let resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString()
// if (resultHash === token.hash) {
//   console.log('Data was not changed')
// } else {
//   console.log('Data was changed. Do not trust!')
// }
