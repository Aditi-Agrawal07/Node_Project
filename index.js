require('dotenv').config()

const http = require("http")

const {app} = require("./app")

// Create the server
const httpServer = http.createServer(app)

const port = process.env.PORT

// start the server 
httpServer.listen(port,()=>{
    console.log("Server Get Started", port)
})