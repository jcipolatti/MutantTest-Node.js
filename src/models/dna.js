var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var dnaSchema = new Schema({
    dna: { type: String[6] },
    isMutant: { type: Boolean}
})
