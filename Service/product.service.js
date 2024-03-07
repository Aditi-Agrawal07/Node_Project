// Import Model

const { Product } = require("../Model")



const getCount = async()=>{

try{
    const Product = await Product.find()

     return res.status(200).send({
        hasError:false,
        data:{
            category:[
                greenVegetables
            ]
        }
     })
}catch(err){

}

    


}

module.exports = {
    getCount
}