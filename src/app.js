const express=require('express');

const app=express();

// app.use('/',(req,res)=>{
//    // res.status(200);
//     res.send("hello,hiiii");
//});
app.get("/owner",(req,res)=>{
    
     res.send("Ishwarappa Hebsur");
 });
 app.post("/location",(req,res)=>{
    // res.status(200);
     res.send("hubli");
 });
 

app.listen(7777,()=>{
    console.log("connected to server!!")
});