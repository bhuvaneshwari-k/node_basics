
const fs=require('fs')
const path=require('path')
const getText=(path)=>{

return new Promise((resolve,reject)=>{
    fs.readFile(path,'utf-8',(err,data)=>{
          if(err)
             reject(err)
          else
            resolve(data)
    })
})
}


 getText(path.join(__dirname,'content','first.txt'))
 .then(result=>{ console.log(result)})
 .catch(err=>{ console.log(err)})


//  const start= async()=>{
//     try{
//     const first=await getText(path.join(__dirname,'content','first.txt'))
//     const second=await getText(path.join(__dirname,'content','second.txt'))
//     console.log(first,second)
//     }catch(err){
//         console.log(err)
//     }
//  }

//  start()