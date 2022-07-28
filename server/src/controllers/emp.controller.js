const express = require("express");
const router = express.Router();
const emp = require("../models/emp.model");



router.post("/empAdd", async (req, res) => {
    const empAdd = await emp.create(req.body);
    res.send(empAdd);  
})

router.get("/emps", async (req, res) => {
    const emps = await emp.find().lean().exec();
    res.status(200).json({emps})
})



// router.delete("/delete", async(req,res)=>{
//     const remove = await emp.deleteOne().lean().exec();
//     res.status(200).json({remove})
// })

module.exports = router;