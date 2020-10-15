const express = require("express");
const app = express();
const fs = require("fs");


//Import router modules
const adminRoute = require('./routes/admin')
const managerRoute = require('./routes/manager')
const userRoute = require('./routes/users')
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
//Root Home Page
app.use('/',express.static('public'));
//Admin Router
app.use('/admin',adminRoute);
//Manager Router
app.use('/manager',managerRoute);
//user Router
app.use('/',userRoute)





// app.get('/',(req,res)=>{
//     req.send('Hello here 1')
//     console.log(req.method)
// });

// app.post('/',(req,res)=>{
//     req.send('Hello here 2')
//     console.log(req.method)
// })
//Above two methods can also be written like below
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