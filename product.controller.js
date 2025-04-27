import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProduct = async (req, res) => {
    try {
      const products = await Product.find({});
      res.status(200).json({ success: true, data: products });
    } catch (error) {
      console.log("error in fetching products :", error.message);
      res.status(500).json({ sucess: false, message: "Server Error" });
    }
  };

  export const createProduct = async (req, res) => {
    try {
      const products = await Product.find({});
      res.status(200).json({ success: true, data: products });
    } catch (error) {
      console.log("error in fetching products :", error.message);
      res.status(500).json({ sucess: false, message: "Server Error" });
    }
  };

  export const updateProduct = async (req, res) => {
    const { id } = req.params;
  
    const product = req.body;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ success: false, message: "Product ID is Invlaid+" });
    }
    try {
      const updateProduct = await Product.findByIdAndUpdate(id, product , { new: true });
      res.status(200).json({ success: true, data: updateProduct });
    } catch (error) {
      console.log("error in deleting products :", error.message);
      res.status(500).json({ sucess: false, message: "Server Error" });
    }
  };

  export const deleteProduct = async (req, res) => {
    const { id } = req.params;
  
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json({ success: true, message: "Product deleted" });
    } catch (error) {
      console.log("error in deleting products :", error.message);
      res.status(404).json({ sucess: false, message: "Product not found" });
    }
  };