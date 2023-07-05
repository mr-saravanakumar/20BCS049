const express = require('express');
const mongoose = require('mongoose');
const app = express();
const data =require("./data.js");
const cors=require('cors');

app.use(cors());
app.use(express.json());

app.get("/trains",(req,res)=>{
    res.json(data);
    console.log(data);
})

app.get("/view/:id",(req,res)=>{
   const id=req.params.id;
   console.log(id);
   data.forEach((d)=>{
    if(id==data.indexOf(d))
    {
        res.send(d);
    }
   })
})


app.listen(3001,()=>{
    console.log("connected......");
});