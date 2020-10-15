const express = require("express");
const app = express();
const fs = require("fs");

const port = process.env.PORT || 3000;


app.use((req,res,next)=>{
    const logIp = req.ip + 'at' + new Date();
    fs.appendFile('log.txt',logIp,(err)=>{
        if(err){
            throw err;
        }
        else{
            next();
        }
    })
});

// app.get('/',(req,res)=>{
//     req.send('Hello here 1')
//     console.log(req.method)
// });

// app.post('/',(req,res)=>{
//     req.send('Hello here 2')
//     console.log(req.method)
// })

app.get('/',(req,res)=>{
    req.send('Hello here 1')
    console.log(req.method)
}).post('/',(req,res)=>{
    req.send('Hello here 2')
    console.log(req.method)
})


app.listen(port,()=>{
    console.log(`Server started at ${port}`);
})