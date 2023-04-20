import { Router } from 'express';
import product_colorController from '../controllers/product_color-controller';

const router = Router();
router.post('/color', product_colorController.addProductColor);
// router.get('/color', product_colorController.getProductColor);
router.get('/color/:productID', product_colorController.getProductColorsByProductID);
router.get('/colors', product_colorController.getAllProductColors);
router.get('/colors/:typeID', product_colorController.getAllProductsColorsByTypeID);

export default router;