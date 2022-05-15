require('dotenv').config()
require('express-async-errors')

const express=require('express')
const app=express()
const connect=require('./DB/connect')
const jwtModel=require('./model/model')
const jwtroute=require('./routes/routes');

const errorHandle=require('./middleware/errorHandle')
const notfound=require('./middleware/notFound')
app.use(express.json())
app.get('/1',(req,res)=>{
    console.log("called")
    res.send('<h1>Welcome to testing</h1>')
})
app.get("/api12",async (req,res)=>{
    console.log("just called")
    await jwtModel.create({name:"Testing karthik"});
    const table=await jwtModel.find({name:"Testing karthik"});
    res.json({table})
})

app.use('/api/v1',jwtroute);
app.use(notfound)
app.use(errorHandle)


const port=process.env.PORT || 9000;

const start=async ()=>{
try{
     connect(process.env.MONGO_URI);
    app.listen(port,console.log("server is running"))

}catch(e){
    console.log(e);
}
}

start()