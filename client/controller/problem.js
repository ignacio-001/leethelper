const Problem = require("../models/problems")
// const asyncWrapper = require('../middleware/async')
const showproblems=(async(req,res)=>{
    const problems=await Problem.find({});
    res.status(200).json({problems});
    // return res.send(problems);
})
const createTask = (async (req, res) => {
    const task = await Problem.create(req.body)
    console.log(req);
    res.status(201).json({ task })
  })
  const deleteTask = (async (req, res,next) => {
    const  { id: taskID }  = req.params
    const task = await Problem.findOneAndDelete({ _id: taskID })
    if (!task) {
      return next(console.log(`No task with id : ${taskID}`, 404))
    }
    res.status(200).json({ task })
  })
module.exports={
showproblems,createTask,deleteTask
}