const mongoose = require("mongoose");
const {Schema} = mongoose;

const UserReportSchema = new Schema({
    userID: {
        type : String,
        required : true
    },
    marketID: {
        type : String,
        required : true
    },
    marketName: String,
    cmdtyID: {
        type : String,
        required : true
    },
    marketType: String,
    cmdtyName: {
        type : String,
        required : true
    },
    priceUnit: {
        type : String,
        required : true
    },
    convFctr: {
        type : Number,
        required : true
    },
    price:{
        type : Number,
        required : true
    }
})

module.exports = mongoose.model("userReport",UserReportSchema);