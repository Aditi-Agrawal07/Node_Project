const mongoose = require("mongoose")

function databaseConnection(){
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("SucessFully connected with Database")
    })
    .catch((err)=>{
        console.log("An Error happened", err)
    })
}

module.exports = {databaseConnection}