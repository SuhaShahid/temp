const express = require('express')
const routes = require("./router/routes")
var bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use("/api", routes)

app.listen(3000,()=>{
    console.log("app will log on : http://localhost:3000");
    
})