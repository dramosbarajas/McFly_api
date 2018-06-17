'use strict'

const moongose = require('mongoose')
const Schema = moongose.Schema

const NotesSchema = Schema ({
    title : String,
    content : String, 
    favorite : Boolean,
})

module.exports = moongose.model('Note' , NotesSchema)