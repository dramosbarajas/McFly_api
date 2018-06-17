'use strict'

const Note = require('../models/note')

function getAllNotes(req,res) {
    res.send("API funcionando getAllNotes")
}

module.exports = {
    getAllNotes,
}