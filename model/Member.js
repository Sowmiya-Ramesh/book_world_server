const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const MemberSchema = new Schema({
    mem_id:{
        membership_id:{
            type: Number,
            required: true
        },
        member_id:{
            type: Number,
            required: true
        },
        status:{
            type: Boolean,
            required: true
        }
    },
    mem_name:{
        type: String,
        required: true
    },
    mem_phone:{
        type: String,
        required: true
    },
    mem_email:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('member', MemberSchema)