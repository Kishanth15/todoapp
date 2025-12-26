// import express, mongoose ,cors
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
//app variable
const app=express();
//express.json
app.use(express.json());
//use cors
app.use(cors());
//connect to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/todoapp')
    .then(() => console.log('DB connected'))
    .catch((err) => console.log('error'))
//create schema
const todoSchema =new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    completed:{
        type:Boolean,
        default:false,
    }
});
//create model
const TodoModel=mongoose.model('Todo',todoSchema);


app.post('/todo',async(req,res)=>{
    if(!req.body){
        res.status(400).send("details is missing");
    }
    const data=new TodoModel(req.body);
    await data.save();
    res.status(200).send("data added successfully");
});

app.get('/todo',async(req,res)=>{
    const data=await TodoModel.find();
    res.status(200).json(data);
});

app.put('/todo/:id',async(req,res)=>{
    const id=req.params.id;
    const data=req.body
    await TodoModel.findByIdAndUpdate(id,data);
    res.status(200).send("data updated successfully");
});
app.delete('/todo/:id',async(req,res)=>{
    const id=req.params.id;
    await TodoModel.findByIdAndDelete(id);
    res.status(200).send("data deleted successfully");
}); 

//port 3333
app.listen(3333,()=>{
  console.log("Server is running on port 3333");
});