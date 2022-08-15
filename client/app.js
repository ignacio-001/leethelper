const express =require('express');
const app=express();
const connectDB=require('./db/connect')
const problems=require('./routes/problems')
const Problem=require('./models/problems')
require('dotenv').config();
const port=3001;
app.use(express.json());
var cors = require('cors');
app.use(cors());

app.use('/api',problems);
const mongoose=require('mongoose')
const start = async () => {
    try {
      await connectDB(process.env.mongo_url);
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  start();