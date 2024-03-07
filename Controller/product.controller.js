const { findByIdAndDelete } = require("../Model/product");
const { Product } = require("./../Model")

const { cloudinary, ApiFeature } = require("./../Utils")

// Controller: save the products
const saveProducts = async (req, res) => {
    try {
        const reqBody = req.body;
        const uploadedFile = await cloudinary.FileUpload(req.file.path)
        console.log(uploadedFile)
        const products = await Product.create({ ...reqBody, product_image: uploadedFile.url })

        res.status(201).json({
            hasError: true,
            products
        })
    } catch (err) {
        console.log("Something went wrong" + err)
    }

}

// Controller: Get All the products
const getProducts = async (req, res) => {
    try {
    const feature = new ApiFeature(Product.find(), req.query).searchByCategory()

        let products = await feature.query

        
        res.status(200).send({
            hasError: false,
            length: products.length,
            products
        })

    } catch (err) {
        res.status(404).send({
            hasError: true,
            message: "Data Not Found",
            error: err.message
        })
    }
}

// Controller: Delete Product
const deleteProduct = async (req, res) => {
try{
    const reqQuery = req.params.productId
    if(reqQuery){

    const product = await Product.findByIdAndDelete(reqQuery)

    res.status(200).send({
        hasError:false,
        product
    })
    }else{
        const products = await Product.deleteMany();

        res.status(200).send({
            hasError:false,
            message:"All the products are deleted"
        })
    }
}catch(err){
    res.status(400).send({
        hasError:false,
        message:`Something went wrong ${err}`
    })}
}

// Controller: Delete Products
const deleteProducts = async(req,res)=>{
    try{

        const products = await Product.deleteMany();

        res.status(200).send({
            hasError:false,
            mesage: "Successfully Deleted"
        })

    }catch(err){
res.status(400).send({
    hasError:true,
    message :"Something went wrong"
})
    }
}

// Product Search By Category
const getCount = async(req,res)=>{
const product  =  await productService.getCount(req.query)
}


module.exports = {
    saveProducts,
    getProducts,
    deleteProduct,
    deleteProducts,
    getCount
}