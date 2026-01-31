import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import studentRouter from './models/student.js';
import productRouter from './routes/productRouter.js';

const app = express();

app.use(bodyParser.json())

mongoose
  .connect(
   "mongodb+srv://admin:12345@project1.1mo28gx.mongodb.net/hello?appName=project1"
  ).then(() => {
    console.log("connected to the database");
  })
  .catch((err) => {
    console.error("database connection failed:", err.message);
  })



  app.use("/student",studentRouter)
  app.use("/products",productRouter)



app.listen(5000, () => {
    console.log('app is running on port 5000');
});