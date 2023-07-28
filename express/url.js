const  fs  = require('fs');
const http=require('http');

const server=http.createServer((req,res)=>{
    console.log('request hit')
     const url=req.url;
     const method=req.method;
    if(url=='/'){
       res.setHeader('content-type','text/html')
       res.write('<html>')
       res.write('<head><title>url</title></head>')
       res.write('<body><form action="/message" method="POST"><input type="text" name="message"><input type="submit" value="send"></form></body>')
       res.write('</html>')
       return res.end()
    }
    if(url=='/message' && method=="POST"){
        fs.writeFileSync('hello.txt','hello');
        res.setHeader('Location','/')
        res.statusCode=302;
        return res.end()

    }
       res.setHeader('content-type','text/html')
       res.write('<html>')
       res.write('<head><title>node basic</title></head>')
       res.write('<body><h1>value</h1></body>')
       res.write('</html>')
       res.end()
})

server.listen(5000)