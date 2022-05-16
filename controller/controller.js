require('dotenv').config();
const jwt=require('jsonwebtoken');
const {v4:uuid}=require('uuid');
const customApiError=require('../errors/customError')
const login=async (req,res)=>{
    
    const {username,password}=req.body;
    console.log(username,password)
    if(username==="" || password==="")
    {
        res.status(400).json({msg:"PLease provide login detials"})
    }else
    {

        const id=uuid();
        const token=await jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})
        res.status(200).json({msg:`fake login successfull ${username} ${password}}`,token:token})
    }
}

const dashboard=async(req,res)=>{
    const ran=Math.ceil(Math.random()*100);
    res.status(200).json({msg:`Hi ${req.user}, you are in dashboard and your number is ${ran}`});
}

module.exports={
    login,dashboard
}