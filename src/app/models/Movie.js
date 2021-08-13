const mongoose = require("mongoose");
const schema = mongoose.Schema;

const MovieSchema = new schema({
    title: String,
    imgUrl: String,
    year: Number,
    whereWatch: Array,
    scoreIMDB: Number,
    duration: Number,
    numberIndication: Number
})

module.exports = mongoose.model("Movie",MovieSchema);