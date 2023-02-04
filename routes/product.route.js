const express = require("express")
const Product = require("../models/product.model")
const app = express.Router()

app.get("/",async(req,res)=>{
    try{
        const products = await Product.find()
        res.send(products)
    }
    catch(e){
        res.send(e.message)
    }
})

app.get("/:id",async(req,res)=>{
    try{
        const {id} = req.params
        console.log(id)
        const product = await Product.findById({_id : id})
        res.send(product)
    }
    catch(e){
        res.send(e.message)
    }
})

module.exports = app