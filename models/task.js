const mongoose = require("mongoose");
const {Schema} = mongoose;

const TaskSchema = new Schema({
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
  });

  module.exports = mongoose.model("task",TaskSchema);