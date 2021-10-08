const Report = require("../models/report");
const Task = require("../models/task");
const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    Task.find({},(err,taskList)=>{
        if(err){
            res.status(500).json({
                message : "Internal Server Error"
            })
        }
        else {
            res.status(200).json({
                tasks : taskList
            });
        }
    })
})

/**
 * post task body :
 * {
        text : "Doctor's Appointment",
        day : "October 7th at 05:30pm",
        reminder : true
    }
 */
router.post("/",(req,res)=>{
    const {text,day} = req.body;
    const task = req.body;
    if(!text || !day){
        res.json(400).json({
            message : "Empty Required Fields"
        })
    }
    else {
        const newTask = new Task(task);
        newTask.save((saveError,savedTask)=>{
            if(saveError) {
                console.log(saveError);
                res.status(500).json({
                    message : "Add task error",
                    error : saveError
                });
            }
            else {
                res.status(200).json({
                    task : savedTask
                })
            }
        })
    }
})

module.exports = router;