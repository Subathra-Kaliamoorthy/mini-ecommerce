const ProductModel = require('../models/productModel');

// Get Produts API - /api/v1/products
exports.getProducts = async(req, res, next) => {
    const products = await ProductModel.find({});
    res.json({
        success: true,
        message : 'Get products working !',
        products
    })
}
// Get Single Produt API - /api/v1/product/:id
exports.getSingleProduct = async (req, res, next) => {
    try {
        const product = await ProductModel.findById(req.params.id);
        res.json({
            success: true,
            message : 'Get single product working !',
            product
        })
    }
    catch(error){
        res.status(404).json({
          success: false,
          message : 'Unable to get product with the current ID'
        })
    }
}