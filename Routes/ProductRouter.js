import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Data from '../Data.js';
import Product from '../Models/ProductModel.js';
import { GenerateToken, IsAuth  } from '../utils.js';


const ProductRouter = express.Router();


ProductRouter.get('/seed', expressAsyncHandler(async(req, res)=>{
    await Product.remove({});
    const CreatedProducts = await Product.insertMany(Data.ProductData);
    res.send({CreatedProducts});
}));

ProductRouter.get('/', expressAsyncHandler(async(req, res)=>{
    const products = await Product.find({});
    res.send(products);
}));

ProductRouter.get('/:id', expressAsyncHandler(async(req, res)=>{
    const product = await Product.findById(req.params.id);
    if(product){
        res.send(product);
    }else{
        res.status(404).send({message: "Product Not Found"});
    }
}));




ProductRouter.post('/', IsAuth, expressAsyncHandler(async(req,res)=>{
    const product = new Product ({
        Title: req.body.Name,
        Image: req.body.Image,
        Price: req.body.Price,
        Description: req.body.Description,
        AvailableSize: req.body.AvailableSize,
    });

}));

export default ProductRouter;