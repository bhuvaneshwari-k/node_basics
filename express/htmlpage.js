const  fs  = require('fs');
const http=require('http');

const server=http.createServer((req,res)=>{
    console.log('request hit')
     const url=req.url;
     const index=fs.readFileSync('index.html')
    if(url=='/'){
       res.setHeader('content-type','text/html')
       res.write(index)
       return res.end()
    }
})

server.listen(5000)