const notfound=(err,req,res,next)=>{return res.status(404).json({msg:"File not found"})}

module.exports=notfound