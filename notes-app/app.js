// const fs = require('fs')
// fs.writeFileSync('note.txt', 'I am Paper')
// fs.appendFileSync('note.txt', 'Hello!Baby!')

//const name = require('./util.js') // 讀本機的模組，此時 util.js 就會被執行了


/**
const getNotes = require('./note.js')

const msg = getNotes()
console.log(msg)

const chalk = require('chalk')
console.log(chalk.blue.bold('success'))


console.log(process.argv)  // 可以透過 process 拿到 command line 的參數（此值為陣列）
/** 
 * process.argv 前面一定會有這 2 個參數
[
  'nodeJS 在電腦裡的執行位置',
  '目前執行檔案'
]

*/

// const getNotes = require('./note')
// const chalk = require('chalk')

// const command = process.argv[2]

// if(command === 'add') {
//   console.log('Add New Notes!!!')
// } else if(command === 'remove') {
//   console.log('Removing note!!!')
// }


const yargs = require('yargs')
const note = require('./note')

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true, // node app 後，是否必須一定要打 --title
      type: 'string' // 定義帶入參數的型別
    },
    body: {
      describe: 'Note body!!!!',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {    
    console.log('Add New Note!!!!!!', argv.title, argv.body)
    note.addNote(argv.title, argv.body)    
  }
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'remove note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    console.log('Remove Note')
    note.removeNote(argv.title)
  }
})

// Create list command
yargs.command({
  command: 'list',
  describe: 'list note',
  handler() {
    console.log('List Note')
    note.listNotes()
  }
})

// Create read command
yargs.command({
  command: 'read',
  describe: 'read note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    }    
  },
  handler(argv) {
    // console.log('Read Note')
    note.readNote(argv.title)
  }
})

// yargs 必須知道他有被呼叫才會啟動
// console.log(yargs.argv)
yargs.parse()