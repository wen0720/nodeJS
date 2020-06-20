const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJson = JSON.parse(dataBuffer.toString())

dataJson['name'] = 'Paper'
dataJson['age'] = 28

fs.writeFileSync('1-json.json', JSON.stringify(dataJson))


// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Raion Hood'
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// // fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// // buffer 資料，node JS 用來表示 2 進位資料的一種格式

// const dataJson = dataBuffer.toString()
// const data = JSON.parse(dataJson)
// console.log(data.title)