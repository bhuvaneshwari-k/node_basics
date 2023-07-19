const fs=require('fs')
const { setDefaultHighWaterMark } = require('stream')
const readFilestream= fs.createReadStream('./content/big.txt',{encoding:'utf8' ,highWaterMark:6},)
const writeFilestream=fs.createWriteStream('./content/newbig.txt')
readFilestream.on('data',(chunk)=>{
    console.log('chunk is:'+chunk)
    writeFilestream.write(chunk)
})
console.log('write completed')
   