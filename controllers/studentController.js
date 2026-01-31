import Student from "../models/student.js";

export function getStudent(req,res){
    Student.findAll().then(
        (data)=>{
            res.json(data)
        }
    )
}

export function saveStudent(req, res){
    console.log(req.body);

    
    const student=new Student({
        name:req.body.name,
        age:req.body.age,
        stream:req.body.stream,
        email:req.body.email
    })

    student.save().then(()=>{
        res.json({
            message:"student added successfully"
        })

    }).catch(()=>{
        res.json({
            message:"faild to add student"
        })
    })

}
