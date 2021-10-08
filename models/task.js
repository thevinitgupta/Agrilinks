const mongoose = require("mongoose");
const {Schema} = mongoose;

const taskSchema = new Schema({
    _id : {
        type : String,
        unique : true,
        required : true
    },
    text : {
        type : String,
        required : true,
        maxLength : 200
    },
    day : {
        type : String,
        required : true,
    },
    reminder : {
        type : Boolean,
        required : true
    }
  })