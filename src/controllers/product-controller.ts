import { NextFunction, Request, Response } from "express";
import { v4 as uuid } from 'uuid';
import path from 'path';
import productService from "../service/product-service";

class ProductController {
  async addProduct(req: Request, res: Response, next: NextFunction) {
    try {
      let fileName = uuid() + '.jpg';
      const { coverImage } = req.files;
      // @ts-ignore
      coverImage.mv(path.resolve(__dirname, '../..', 'static', fileName));
      const newProduct = await productService.addProduct({...req.body, coverImage: fileName});
      return res.json(newProduct);
    } catch (error) {
      next(error);
    }
  };

  async getProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const { value } = req.body;
      const product = await productService.getProduct(value);
      return res.json(product);
    } catch (error) {
      next(error);
    }
  };

  async getProductByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const product = await productService.getProductByID(req.params.id);
      return res.json(product);
    } catch (error) {
      next(error);
    }
  };

  async getAllProductsByType(req: Request<{ typeID: string }>, res: Response, next: NextFunction) {
    try {
      const product = await productService.getAllProductsByType(req.params.typeID);
      return res.json(product);
    } catch (error) {
      next(error);
    }
  };

  async getAllProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await productService.getAllProducts(req);
      // res.setHeader('max-records', products.length);
      return res.json({
        products,
        maxRecords: products.length,
      });
      // return res.json(products);
    } catch (error) {
      next(error);
    }
  };

  async updateProductByID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const { price, views } = req.body;
      if (price) {
        const product = await productService.updateProductByID(req.params.id, price, 'price');
        return res.json(product);
      }
      if (views) {
        const product = await productService.updateProductByID(req.params.id, views, 'views');
        return res.json(product);
      }
    } catch (error) {
      next(error);
    }
  };

  async deleteProduct(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const product = await productService.deleteProduct(req.params.id);
      return res.json(product);
    } catch (error) {
      next(error);
    }
  };
};

export default new ProductController;