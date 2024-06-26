// require('dotenv').config({path: './env'})
import  express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";


const app = express()

console.log("index.js is running");

dotenv.config({
  path: './env'
})

connectDB()
.then(() => {
  app.listen(process.env.PORT || 8000 , () => {
    console.log(` Server is running at port : ${process.env.PORT}`);
  })
})
.catch((err) => {
  console.log("MongoDB connection failed check for app&index file", err);
} )