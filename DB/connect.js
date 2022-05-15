const mongoose=require('mongoose')
const connect=async (url)=>{
   await mongoose.connect(url,()=>{
        console.log("database is connected");
    });
}
module.exports=connect;