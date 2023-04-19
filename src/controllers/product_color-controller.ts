import { NextFunction, Request, Response } from "express";
import product_colorService from "../service/product_color-service";
import { v4 as uuid } from 'uuid';
import path from 'path';

class ProductColorController {
  async addProductColor(req: Request, res: Response, next: NextFunction) {
    try {
      let fileName = uuid() + '.jpg';
      const { coverImage } = req.files;
      // @ts-ignore
      coverImage.mv(path.resolve(__dirname, '../..', 'static/product-color', fileName));
      const newProductColor = await product_colorService.addProductColor({...req.body, coverImage: fileName});
      return res.json(newProductColor);
    } catch (error) {
      next(error);
    }
  };

  async getProductColor(req: Request, res: Response, next: NextFunction) {
    try {
      const { value } = req.body;
      const color = await product_colorService.getProductColor(value);
      return res.json(color);
    } catch (error) {
      next(error);
    }
  };

  async getProductColorsByProductID(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    try {
      const color = await product_colorService.getProductColorsByProductID(req.params.id);
      return res.json(color);
    } catch (error) {
      next(error);
    }
  };

  async getAllProductColors(req: Request, res: Response, next: NextFunction) {
    try {
      const colors = await product_colorService.getAllProductColors();
      return res.json(colors);
    } catch (error) {
      next(error);
    }
  };

  async getAllProductsColorsByTypeID(req: Request<{ typeID: string }>, res: Response, next: NextFunction) {
    try {
      const colors = await product_colorService.getAllProductsColorsByTypeID(req.params.typeID);
      return res.json(colors);
    } catch (error) {
      next(error);
    }
  };
};

export default new ProductColorController;