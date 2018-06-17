'use strict'
const express = require('express')
const NoteController = require ('../controllers/note')
const api = express.Router()

//Rutas para los endpoint
api.get('/note', NoteController.getAllNotes)
api.get('/note/:noteId', NoteController.getNoteById)
api.get('/note', NoteController.getAllFavNotes)
api.post('/note', NoteController.createNote)
api.delete('/note/:noteId', NoteController.deleteNote)
api.patch('/note/:noteId', NoteController.updateNote)

module.exports = api