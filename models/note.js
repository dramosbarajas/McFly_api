'use strict'

const moongose = require('mongoose')
const Schema = moongose.Schema

const NotesSchema = Schema ({
    title : String,
    content : String, 
    favorite : {type:Boolean, default:0}
})

module.exports = moongose.model('Note' , NotesSchema)