const  fs  = require('fs');
const http=require('http');

const server=http.createServer((req,res)=>{
    console.log('request hit')
     const url=req.url;
     const formhtml=fs.readFileSync('./form/HTMLWithForms.html')
     const formcss=fs.readFileSync('./form/HTMLWithForms.css')
     const formjs=fs.readFileSync('./form/HTMLWithForms.js')
    if(url=='/'){
       res.setHeader('content-type','text/html')
       res.write(formhtml)
       return res.end()
    }
    else if(url=='/HTMLWithForms.css'){
        res.setHeader('content-type','text/css')
        res.write(formcss)
        return res.end()
     }
     else if(url=='/HTMLWithForms.js'){
        res.setHeader('content-type','text/javascript')
        res.write(formjs)
        return res.end()
     }
     else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>Error<h1>')
     }
})

server.listen(5000)