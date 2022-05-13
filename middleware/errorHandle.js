const errorHandle= (err,req,res,next)=>{
        return res.status(500).json({msg:"Something went wrong",err:err})
}
module.exports=errorHandle