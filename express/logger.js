const logger=(req,res,next)=>{
   console.log(req.method)
   console.log(req.url)
   const date=new Date().getDate();
   console.log(date)
   next()
}
module.exports = logger;