const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const roleSchema = new Schema({
    role:{
        type:String ,
        enum : ['admin','user'],
        default:'user'
    },
    description:{
        type:String
    }
})

module.exports = mongoose.model("roles",roleSchema)
