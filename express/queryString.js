const express=require('express');
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

app.get('/api/products/query',(req,res)=>{
    console.log(req.query)
    const {search,limit}=req.query
    let sortedPro=[...data]
    if(search){
        sortedPro=sortedPro.filter((product)=>{
           return product.name.startsWith(search)
        })
    }
    if(limit){
       sortedPro=sortedPro.slice(0,Number(limit))
    }
    if(sortedPro.length<1){
        return res.status(200).json({success:true,data:[]})
    }
    return res.status(200).json(sortedPro)
})


app.get('/api/products/:productID/reviews/:revId',(req,res)=>{
    console.log(req.params)
    const {productID}=req.params
    res.send('hello')
})
app.listen(5000)