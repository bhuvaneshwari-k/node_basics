const express=require('express');
const data=require('./data')
const app=express();
const logger=require('logger')
app.use(logger)
app.get('/',(req,res)=>{
    res.send('home')
})

app.get('/about',(req,res)=>{
    res.send('about')
})

app.get('/api/products',(req,res)=>{
    res.send('products')
})

app.get('/api/items',(req,res)=>{
    res.send('items')
})