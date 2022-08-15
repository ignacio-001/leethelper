const express = require("express");
const { showproblems, createTask, deleteTask } = require("../controller/problem");
const router = express.Router();
router.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
     });
router.route("/send").post( createTask );
router.route("/allproblems").get( showproblems );
router.route("/:id").delete(deleteTask);
module.exports = router;
