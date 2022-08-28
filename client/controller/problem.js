const Problem = require("../models/problems")
const showproblems=(async(req,res)=>{
    const problems=await Problem.find({});
    res.status(200).json({problems});
    // return res.send(problems);
})
const impproblems=(async(req,res)=>{
  const problems=await Problem.find({important: true});
  res.status(200).json({problems});
  // return res.send(problems);
})
const solved=(async(req,res)=>{
  const problems=await Problem.find({solved: true});
  res.status(200).json({problems});
  console.log(problems);
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
  const updateTask = (async (req, res,next) => {
    const  { id: taskID }  = req.params
    console.log(req);
    const task = await Problem.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    })
    if (!task) {
      return next(console.log(`No task with id : ${taskID}`, 404))
    }
    console.log(task);
    res.status(200).json({task});
    // res.status(200).json({ task })
  })
module.exports={
showproblems,createTask,deleteTask,updateTask,impproblems,solved
}