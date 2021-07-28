const report = require("../models/report");
const { v4: uuidv4 } = require('uuid');
const express = require('express');
const router = express.Router();

router.get("/reports",async (req,res)=>{
    res.send("Reports route!!")
})


//sample  report : 
/**
 *  body : {
 *      reportDetails : {
        userID: "user-1",
        marketID: "market-1",
        marketName: "test market",
        cmdtyID: cmdty-1,
        marketType: "mandi",
        cmdtyName: "Potato",
        priceUnit: "Quintals",
        convFctr: 100,
        price:1600
        }
 * }
 */
router.post("/reports",async (req,res)=>{
    let reportID  = uuidv4();
    console.log(reportID) //01b63410-3bf1-41f7-8642-3c1b95e57c25 - sample
})

module.exports = router;