const CustomApiError=require('../errors/customError')
const errorHandle= (err,req,res,next)=>{
        if(err instanceof CustomApiError)
        {
                console.log("custom api called",err)
                return res.status(err.statuscode).json({msg:err.message});
        }
        return res.status(500).json({msg:"Something went wrong",err:err})
}
module.exports=errorHandle