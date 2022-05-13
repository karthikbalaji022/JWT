require('dotenv').config()
require('express-async-errors')

const express=require('express')
const app=express()

const errorHandle=require('./middleware/errorHandle')
const notfound=require('./middleware/notFound')

app.get("/",(req,res)=>{
    res.send("<h1>Correctly called</h1>")
})

app.use(notfound)
app.use(errorHandle)


const port=process.env.PORT || 9000

const start=async ()=>{
try{
    app.listen(port,console.log("server is running"))
}catch(e){
    console.log(e);
}
}

start()