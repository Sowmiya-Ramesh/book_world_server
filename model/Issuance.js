const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const IssuanceSchema = new Schema({
    issuance_id:{
        type: Number,
        required: true
    },
    book_id:{
        type: Number,
        required: true
    },
    issuance_date:{
        type: Date,
        required: true
    },
    issuance_member:{
        type: Number,
        required: true
    },
    issued_by:{
        type: String,
        required: true
    },
    target_return_date:{
        type: Date,
        required: true
    },
    issuance_status:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('issuance', IssuanceSchema)