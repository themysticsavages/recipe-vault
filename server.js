const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.sendFile('./index.html')
})

app.listen(3000)
console.log('Server listening on port 3000!')