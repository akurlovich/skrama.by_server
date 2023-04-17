import { Router } from 'express';
import product_infoController from '../controllers/product_info-controller';
// import brandController from '../controllers/brand-controller';

const router = Router();
router.post('/productinfo', product_infoController.addProductInfo);
router.get('/productinfos/:productID', product_infoController.getAllProductInfoByProductID);
router.get('/productinfo/:id', product_infoController.getProductInfoByID);
router.get('/productinfos', product_infoController.getAllProductInfos);
router.get('/productsinfos/:typeID', product_infoController.getAllProductsInfosByTypeID);
router.delete('/productinfo/:id', product_infoController.deleteProductInfos);

export default router;