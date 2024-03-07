const router = require("express").Router();

// Import Controller
const { productController } = require("./../Controller");

// Import Middleware
const { multer } = require("./../Middleware");

// Save the products
router.post(
  "/save",
  multer.uploader.single("product_image"),
  productController.saveProducts
);

// Get All the products
router.get("/getAll", productController.getProducts);

// Delete Products
router.delete("/delete/:productId", productController.deleteProduct);

// Delete all the Proucts
router.delete("/delete", productController.deleteProducts);

//Search By Category
router.get("/getCount", productController.getCount);

module.exports = router;
