const mongoose=require('mongoose');
const schema=mongoose.Schema({
name:{
    type:String,
    default:"Testing"
},
empId:{
    type:Number,
    default:1234
}
});
module.exports=mongoose.model("JwtToken",schema);