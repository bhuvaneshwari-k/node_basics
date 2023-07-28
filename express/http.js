const http=require('http');

const server=http.createServer((req,res)=>{
    console.log('request hit')
    res.setHeader('content-type','text/html')
    res.write('<html>')
    res.write('<head><title>node basic</title></head>')
    res.write('<body><h1>welcome</h1></body>')
    res.write('</html>')
    res.end()
})

server.listen(5000)