const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
 book_id:{
    type: Number,
    required: true
 },
 book_name:{
    type: String,
    required: true
 },
 book_cat_id:{
    cat_id:{
        type:Number,
        required: true
    },
    cat_name:{
        type: String,
        required: true
    },
    sub_cat_name:{
        type: String,
    }
 },
 book_collection_id:{
    collection_id:{
        type: Number,
        required: true
    },
    collection_name:{
        type: String,
        required: true
    }
 },
 book_launch_date:{
    type: Date,
    required: true
 },
 book_publisher:{
    type: String,
    required: true
 }
})

module.exports = mongoose.model('book', BookSchema);