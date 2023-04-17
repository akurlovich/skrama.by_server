import { Request } from "express";
import { PRODUCTS_LIMIT } from "../constants";
import productModel from "../models/product-model";
import { IProduct } from "../types/IProduct";

class ProductService {
  async addProduct(product: IProduct) {
    return await productModel.create(product);
  };

  async getProduct(value: string) {
    return await productModel.findOne({value});
  };

  async getProductByID(id: string) {
    return await productModel.findById(id);
  };

  async getAllProducts(query: Request) {
    let { typeID, brandID, limit = PRODUCTS_LIMIT, page = 1 } = query.query;
    let offset = Number(page) * Number(limit) - Number(limit);
    if (!brandID && !typeID) {
      return await productModel.find().limit(Number(limit)).skip(offset);
    }
    if (brandID && !typeID) {
      return await productModel.find({brandID}).limit(Number(limit)).skip(offset);
    }
    if (!brandID && typeID) {
      return await productModel.find({typeID}).limit(Number(limit)).skip(offset);
    }
    if (brandID && typeID) {
      return await productModel.find({typeID, brandID}).limit(Number(limit)).skip(offset);
    }
  };

  async getAllProductsByType(typeID: string) {
    return await productModel.find({typeID: typeID});
  };

  async updateProductByID(id: string, data: number, key: string) {
    return await productModel.findByIdAndUpdate({_id: id}, {[key]: data}, {new: true});
  };

  async deleteProduct(id: string) {
    return await productModel.findByIdAndDelete(id);
  };
};

export default new ProductService();