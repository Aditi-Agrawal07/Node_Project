const express = require("express")
const cors =  require("cors")

const app =  express()

app.use(express.json())
app.use(cors())

// Import Utilties
const { database } = require('./Utils')

// Import Routes
const {productRoutes} = require("./Routes")

database.databaseConnection();

app.use('/product', productRoutes)

module.exports  =  { app }