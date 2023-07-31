const fs=require('fs').promises;
const path=require('path')
const promise=async()=>{
try{
    const first=await fs.readFile(path.join(__dirname,'content','first.txt'),'utf8')
    console.log(first)
    const second= await fs.readFile('./content/second.txt','utf8')
    console.log(second)
    await fs.writeFile('./content/result-promise.txt',`here is the result : ${first} , ${second}`)
    console.log('write completed')
    await fs.rename('./content/result-promise.txt','./content/result-promises.txt')
    // await fs.unlink('./content/result-promises.txt')
    console.log('finished')
}catch(err){
    console.log(err)
}
}
promise();




