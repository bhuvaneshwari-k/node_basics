const eventemitter = require('events')

const event = new eventemitter()


event.on('request',()=>{
    console.log('request accepted')
})

event.on('request',(name,age)=>{
    console.log(`new request accepted here ${name} ${age}`)
})

event.emit('request','bhu',4);