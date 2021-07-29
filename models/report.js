const mongoose = require("mongoose");
const {Schema} = mongoose;

const ReportSchema = new Schema({
    _id : {
        type : String
    },
    cmdtyName : String,
    cmdtyID: String,
    marketID: String,
    marketName: String,
    users: [String],
    timestamp : String,
    priceUnit: String,
    price: Number
},
{ _id : false })

module.exports = mongoose.model("report",ReportSchema);