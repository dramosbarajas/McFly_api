'use strict'

const Note = require('../models/note')

//--GET--Recupera todas las notas que haya en la BD
function getAllNotes(req, res) {
    //Query a mongoDB
    Note.find({}, (err, notes) => {
        //Compruebo si hay algun error en el callback
        if (err) return res.status(500)
            .send({
                message: `Se ha producido un error: ${err}`
            })

        //Comprueba si trae valores
        if (!notes) return res.status(404)
            .send({
                message: 'La consulta no a recuperado ningún valor.'
            })

        //Respuesta con valores
        res.status(200).send({
            notes
        })
    })
}
//--GET-- Recupera todas las notas que sean favoritas
function getAllFavNotes(req, res) {
    //Query a mongoDB
    Note.find({favorite:1}, (err, notes) => {
        //Compruebo si hay algun error en el callback
        if (err) return res.status(500)
            .send({
                message: `Se ha producido un error: ${err}`
            })

        //Comprueba si trae valores
        if (!notes) return res.status(404)
            .send({
                message: 'La consulta no a recuperado ningún valor.'
            })

        //Respuesta con valores
        res.status(200).send({
            notes
        })
    })
}
//--GET-- Recupera una unica nota por un determinado ID 

function getNoteById(req, res) {
    //Asignacion del parametro que viene en la url 
    let noteID = req.params.noteID
    //Query a mongoDB
    Note.findById(noteID, (err, note) => {
        //Compruebo si hay algun error en el callback
        if (err) return res.status(500)
            .send({
                message: `Se ha producido un error: ${err}`
            })

        //Comprueba si trae valores
        if (!note) return res.status(404)
            .send({
                message: 'La consulta no a recuperado ningún valor.'
            })

        //Respuesta con valores
        res.status(200).send({
            note
        })
    })
}
//--POST-- Crea una nota nueva
function createNote(req, res) {
    //Instacia de modelo.
    let note = Note()
    //Seteo de variables
    note.title = req.body.title
    note.content = req.body.content
    note.favorite = req.body.favorite
    //Metodo salvar
    note.save((err, notaGuardada) => {
        if (err)
            return res.status(500).send({
                message: `Ha ocurrido un error: ${err}`
            })
        //Devuelve el objeto creado
        res.status(200).send({
            message: notaGuardada
        })
    })

}
//--DELETE-- Borra una nota por un ID

function deleteNote(req, res) {
    let noteID = req.params.noteID
    Note.findById(noteID, (err, note) => {
        //Compruebo si hay algun error en el callback
        if (err) return res.status(500)
            .send({
                message: `Se ha producido un error: ${err}`
            })
        //Elimina la nota
        note.remove(err => {
            if (err) res.status(500)
                .send({
                    message: `Error al borrar el producto ${err}`
                })
            res.status(200).send({
                message: 'El contenido se ha borrado correctamente.'
            })
        })
    })
}
//--PATCH-- Update de una nota a favorita o la desmarca como fav

function updateNote(req, res) {
    let noteID = req.params.noteID
    let updateNote = req.body
    Note.findByIdAndUpdate(noteID,updateNote, (err,noteUpdate) => {
        if(err) res.status(500).send({message: `Ha ocurrido un error ${err}`})
        res.status(200).send({noteUpdate})
    })
}


module.exports = {
    getAllNotes,
    getAllFavNotes,
    getNoteById,
    createNote,
    deleteNote,
    updateNote,
}