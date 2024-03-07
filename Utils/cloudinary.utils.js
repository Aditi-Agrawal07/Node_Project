const cloudinary = require("cloudinary").v2
require("dotenv").config()

cloudinary.config({
    cloud_name:process.env.cloud_name,
    api_key:process.env.api_key,
    api_secret: process.env.api_secret
})

const FileUpload = async(file)=>{
    try{
        const result = await cloudinary.uploader.upload(file)
        return result;
    }catch(err){
        console.log(err)
    }
}
module.exports ={
    FileUpload
}