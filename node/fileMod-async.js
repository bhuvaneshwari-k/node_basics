const {readFile,writeFile}=require('fs');
const path=require('path')
readFile(path.join(__dirname,'content','first.txt'),'utf8',(err,result)=>{
if(err){
    console.log(err);
    return
}
const first=result;
readFile('./content/second.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
        // throw err;
    }
    const second=result;
    writeFile('./content/result-async.txt',`here is the result : ${first} , ${second}`,(err)=>{
        if(err){
            console.log(err);
            return
        }
      })
})

});

// process.on('uncaughtException',err=>{
//     console.error(`error thrown':${err}`);
//     process.exit(1)
// })