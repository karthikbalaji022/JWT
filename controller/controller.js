
const login=async (req,res)=>{
    if(req.body===null)
    {
        res.status(400).json({msg:"Please enter the login details"});
    }else{
    const {username:User,password:Pass}=req.body;
        await res.status(200).json({msg:`fake login successfull ${User} ${Pass}}`})
    }
}

const dashboard=async(req,res)=>{
    const ran=Math.ceil(Math.random()*100);
    res.status(200).json({msg:`You are in dashboard and your number is ${ran}`});
}

module.exports={
    login,dashboard
}