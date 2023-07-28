const express=require('express')
const path=require('path')
const app=express();

app.use(express.static('./public'))

app.get('/',(req,res)=>{
    // res.status(200).sendFile(path.resolve(__dirname,'./form','HTMLWithForms.html'))
    res.status(200).sendFile(path.resolve(__dirname,'./public','HTMLWithForms.html'))
})

app.all('*',(req,res)=>{
    res.status(404).send('page not found')
})

app.listen(5000,()=>{
    console.log('requesting for post 5000...')
})