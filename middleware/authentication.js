const jwt=require('jsonwebtoken');

const authentication=async(req,res,next)=>{
    console.log(req.headers)
    const tokenAuth=req.headers.authorization;
    if(!tokenAuth || !tokenAuth.startsWith("Bearer "))
    {
        return res.status(401).send("Unable to authorize the user");
    }
    const token=tokenAuth.split(' ')[1];
    try{
    const decode=await jwt.verify(token,process.env.JWT_SECRET);
    req.user=decode.username
    next();
    }catch(e){
        res.status(400).json({msg:e})
    }
}
module.exports=authentication