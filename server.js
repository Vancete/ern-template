const config = require('./config')
const path = require('path')
var express = require('express')
var app = express()

app.get('/d/:id*', function (req, res) {

        let json = { id: req.params.id}
        res.json(json)

})

// Important to maintain the wildcard get the last one to avoid get overwritten by others
app.get('*', (req,res) =>{
    if(req.url.indexOf('/static') === 0){
        res.sendFile(path.join(__dirname+'/client/build' + req.url))
    } else {
        res.sendFile(path.join(__dirname+'/client/build/index.html'))
    }
})

app.listen( process.env.app_port || 8080, process.env.app_host || '127.0.0.1', function () {

  console.log('--- Server started ---')

});