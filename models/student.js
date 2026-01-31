import mongoose from "mongoose";

const studentSchema = mongoose.Schema(
    {
        name:String,
        age:Number,
        stream:String,
        email:String
    }
)

const Student=mongoose.model("student",studentSchema)

export default Student;

//Mongo is the database name for this project in mongodb