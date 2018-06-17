'use strict'

const Note = require('../models/note')

//--GET--Recupera todas las notas que haya en la BD
function getAllNotes(req,res) {

}
//--GET-- Recupera todas las notas que sean favoritas
function getAllFavNotes(req,res) {
    res.send("API funcionando getAllNotes")
}
//--GET-- Recupera una unica nota por un determinado ID 

function getNoteById(req,res) {
    res.send("API funcionando getAllNotes")
}
//--POST-- Crea una nota nueva
function createNote(req,res) {
    res.send("API funcionando getAllNotes")
}
//--DELETE-- Borra una nota por un ID

function deleteNote(req,res) {
    res.send("API funcionando getAllNotes")
}
//--PATCH-- Update de una nota a favorita o la desmarca como fav

function updateNote(req,res) {
    res.send("API funcionando getAllNotes")
}


module.exports = {
    getAllNotes,
}