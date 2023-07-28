const express=require('express')

const app=express();

app.get('/',(req,res)=>{
    res.status(200).send('homepage')
})

app.get('/about',(req,res)=>{
    res.status(200).send('aboutpage')
})

app.all('*',(req,res)=>{
    res.status(404).send('page not found')
})

app.listen(5000,()=>{
    console.log('requesting for post 5000...')
})