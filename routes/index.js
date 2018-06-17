'use strict'
const express = require('express')
const NoteController = require ('../controllers/note')
const api = express.Router()

api.get('/note', NoteController.getAllNotes)

module.exports = api