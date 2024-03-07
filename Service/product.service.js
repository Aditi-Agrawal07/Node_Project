// Import Model

const { Product } = require("../Model");

const getCount = async () => {
  try {
    const product = await Product.find();
    const CategoryCount = {};
    product.forEach((ele) => {
      if (CategoryCount.hasOwnProperty(ele.Category)) {
        CategoryCount[ele.Category] += 1;
      } else {
        CategoryCount[ele.Category] = 1;
      }
    });
    return CategoryCount;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getCount,
};
