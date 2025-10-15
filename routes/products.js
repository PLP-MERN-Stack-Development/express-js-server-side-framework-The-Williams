const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const validateProduct = require('../middleware/validateProduct');
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductStats
} = require('../controllers/productsController');

router.get('/', getAllProducts);
router.get('/stats', getProductStats);
router.get('/:id', getProductById);
router.post('/', auth, validateProduct, createProduct);
router.put('/:id', auth, validateProduct, updateProduct);
router.delete('/:id', auth, deleteProduct);

module.exports = router;
