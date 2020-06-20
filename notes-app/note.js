const fs = require('fs')
const chalk = require('chalk')

const getNotes = function() {
  return 'Your notes...'
}

const addNote = function(title, body) {
  const notes = loadNote()  
  const duplicate = notes.find(note => note.title === title)

  debugger

  if(!duplicate) {
    notes.push({
      title,
      body
    })
    saveNote(notes)
    console.log(chalk.green.inverse('New Note Add'))
  } else {
    console.log('oppppppps! There is the same title already.')
  }
}

const removeNote = function(title) {
  const notes = loadNote()
  const removeIdx = notes.findIndex(note => note.title === title)  
  if(removeIdx > -1) {
    const newNotes = notes.slice(0, removeIdx).concat(notes.slice(removeIdx+1, notes.length-1))
    console.log(newNotes)
    saveNote(newNotes)
    console.log(chalk.green.inverse('Notes Removed!!'))
    return 
  }  
  console.log(chalk.red.inverse('No Notes Found!!'))
}

const listNotes = function() {
  const notes = loadNote()
  console.log(chalk.inverse('Note List'))
  console.log('========================')
  notes.forEach((note) => {
    console.log(note.title)
  })
}

const readNote = function(title) {
  const notes = loadNote()
  const note = notes.find(note => note.title === title)
  if(note) {
    console.log(chalk.inverse(note.title))
    console.log(note.body)
  } else {
    console.log(chalk.red.inverse('Note Not Found'))
  }
}

const loadNote = function() {
  try{
    const dataBuffer = fs.readFileSync('./note.json')
    return JSON.parse(dataBuffer.toString())
  } catch(e) {
    return []
  } 
}

const saveNote = function(notes) {
  const dataString = JSON.stringify(notes)
  fs.writeFileSync('./note.json', dataString)
}

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
  readNote
}