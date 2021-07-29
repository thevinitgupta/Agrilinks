const Report = require("../models/report");
const UserReport = require("../models/userReport");
const { v4: uuidv4 } = require('uuid');
const express = require('express');
const { Schema,Timestamp } = require("mongoose");
const router = express.Router();

router.get("/reports?", (req,res)=>{
    const reportID = req.query.reportID;
    if(!reportID) {
        res.status(404).json({
            message : "No Query Parameter"
        })
    }
    else {
        Report.findOne({_id : reportID},(err,report)=>{
            if(err){
                res.status(500).json({
                    message : "Internal Server Error!"
                })
            }
            else if(!report){
                res.status(500).json({
                    message : "Report Does not Exist!"
                })
            }
            else {
                res.status(200).json(report);
            }
         });
    }
     
})


router.post("/reports",async (req,res)=>{

    let {marketID,cmdtyID,userID} = req.body.reportDetails;

    let reportDetails = req.body.reportDetails;

    if(!marketID || !cmdtyID || !userID){
        res.status(400).json({
            message : "Empty Request Fields!"
        })
    }
    else {
        let newUserReport = new UserReport({...reportDetails});
    UserReport.findOne({marketID: marketID,cmdtyID : cmdtyID,userID: userID}, async (err,userRep)=>{
        if(err){
            res.status(500).json({
                message : "internal server error"
            })
        }
        if(userRep) {
            res.status(400).json({
                message : "Already Exists",
                report : userRep
            });
        }
        else {

            newUserReport.save((userReportSaveError,userReportSaved)=>{
                if(userReportSaveError){
                    res.status(500).json({
                        message : "New User Report Save Error!"
                    })
                }
                else if(!userReportSaved){
                    res.status(500).json({
                        message : "New User Report Not Saved!"
                    })
                }
                else
                {
                Report.findOne({marketID: marketID,cmdtyID : cmdtyID},(error,aggregated)=>{
                    if(error){
                        res.status(500).json({
                            message : "internal server error"
                        })
                    }
                    else if(!aggregated){
                        let reportID  = uuidv4();
                        let price = Number(reportDetails.price / reportDetails.convFctr);
                        const timestamp =  Date.now();

                        let newAggregate = new Report({
                            _id : reportID,
                            cmdtyName : reportDetails.cmdtyName,
                            cmdtyID,
                            marketID,
                            marketName : reportDetails.marketName,
                            users : [userID],
                            timestamp,
                            priceUnit : 'Kg',
                            price
                        })


                        newAggregate.save((saveErr,aggregateSaved)=>{
                            if(saveErr){
                                console.log(saveErr)
                                res.status(500).json({
                                    message : "Internal Server Error"
                                })
                            }
                            else if(!aggregateSaved){
                                res.status(500).json({
                                    message : "Aggregate Save Error"
                                })
                            }
                            else {
                                console.log(aggregateSaved);
                                res.status(200).json({
                                    status : "success",
                                    reportID : aggregateSaved._id
                                })
                            }
                        })
                    }
                    else {
                        //userReportSaved
                        const marketPrice = Number(userReportSaved.price / userReportSaved.convFctr);
                        const aggregatePrice = (aggregated.price+marketPrice)/2;
                        aggregated.users.push(userID);
                        aggregated.price = aggregatePrice;
                        aggregated.timestamp = Date.now();
                        aggregated.save().then((updatedAggregate)=>{
                            res.status(200).json({
                                status : "success",
                                reportID : updatedAggregate._id
                            })
                        }).catch((updateErr)=>{
                            console.log(updateErr);
                            res.status(500).json({
                                message : "Aggregate Report Update Error!"
                            })
                        })
                    }
                });    
             }
            });
        }
    });
    }    
})

module.exports = router;