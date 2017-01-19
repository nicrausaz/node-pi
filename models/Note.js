var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var noteSchema = mongoose.Schema({
    semestre: { type: Number, min: 1, max: 8 },
    branche: String,
    note: { type: Number, min: 1, max: 6 }
})

// schema -> model
var Note = mongoose.model('note', noteSchema)

module.exports = Note;