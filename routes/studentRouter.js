import express from 'express';
import { getStudent, saveStudent } from '../controllers/studentController.js';

const studentRouter=express.Router()


studentRouter.post("/", saveStudent);
studentRouter.get("/", getStudent);

export default studentRouter;