import { Router } from 'express';
import productController from '../controllers/product-controller';

const router = Router();
router.post('/product', productController.addProduct);
router.get('/product', productController.getProduct);
router.get('/product/:id', productController.getProductByID);
router.get('/products', productController.getAllProducts);
router.delete('/product/:id', productController.deleteProduct);
router.put('/product/:id', productController.updateProductByID);

export default router;