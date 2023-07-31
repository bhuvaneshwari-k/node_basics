const express=require('express');
const products = require('./data');
const data=require('./data')
const app=express();
app.get('/',(req,res)=>{
    console.log('requested')
    res.setHeader('content-type','text/html')
    res.write('<hmtl><a href="/api/products">Products</a><br><a href="/api/products/first">firstProduct</a></html>')  
})
app.get('/api/products',(req,res)=>{
       const newProduct=data.map((product)=>{
        const {id,name,category}=product;
        return {id,name,category};
    })
    res.json(newProduct)
    })

app.get('/api/products/first',(req,res)=>{
    const single=data.find((product)=>{
        return product.id==1
    })
    res.json(single)
})

//route params
app.get('/api/products/:productID',(req,res)=>{
    console.log(req.params)
    const {productID}=req.params
    const id=data.find((product)=>{
        return product.id===Number(productID)
    })
    if(!id){
        res.status(404).send('Data not found')
    }
    res.json(id)
})


app.get('/api/products/:productID/reviews/:revId',(req,res)=>{
    console.log(req.params)
    const {productID}=req.params
    res.send('hello')
})
app.listen(5000)