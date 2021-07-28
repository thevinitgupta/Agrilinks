const mongoose = require("mongoose");
const {Schema} = mongoose;

const ReportSchema = new Schema({

    reports : [
         {
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
        }
    ],
    reportID : {
        type : String,
        required : true,
        unique : true
    },
    cmdtyID: String,
    marketID: String,
    marketName: String,
    users: [String],
    timestamp: {
        type : String
    },
    priceUnit: String,
    price: Number
})

module.exports = mongoose.model("report",ReportSchema);