const express = require('express')
var serveStatic= require('server-static')
const path = require('path')
const app = express()

app.use('/', serveStatic(path.join(__dirname, + '/dist')))
app.get(/.*/, function(req, res){
    res.sendfile(__dirname + "/dist/index.html")
});

const port = process.env.PORT || 8080

app.listen(port)

console.log('Listening on port: ' +port)