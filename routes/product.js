import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Data from '../Data.js';
import Product from '../models/product.js';
import { GenerateToken, IsAuth  } from '../utils.js';


const productRouter = express.Router();


productRouter.get('/seed', expressAsyncHandler(async(req, res)=>{
    await Product.deleteMany({});
    const CreatedProducts = await Product.insertMany(Data.ProductData);
    res.send({CreatedProducts});
}));

productRouter.get('/', expressAsyncHandler(async(req, res)=>{
    try{
        const products = await Product.find({});
        if(products){
            res.status(200);
            return res.send(products);
        }
    }catch(error){
        res.status(400);
        return res.json(error);
    }
}));

productRouter.get('/:id', expressAsyncHandler(async(req, res)=>{
    const product = await Product.findById(req.params.id);
    if(product){
        res.send(product);
    }else{
        res.status(404).send({message: "Product Not Found"});
    }
}));

productRouter.post('/search', expressAsyncHandler(async(req,res)=>{
    try{
        const {searchQuery} = req.query;
        const title = new RegExp(searchQuery, 'i');
        const products = await Product.find({Title: title});
        if(products){
            res.status(200);
            return res.json(products);
        }
    }catch(error){
        res.status(400);
        return res.json(error);
    }
}));




productRouter.post('/', IsAuth, expressAsyncHandler(async(req,res)=>{
    const product = new Product ({
        Title: req.body.Name,
        Image: req.body.Image,
        Price: req.body.Price,
        Description: req.body.Description,
        AvailableSize: req.body.AvailableSize,
    });

}));

export default productRouter;