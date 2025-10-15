const { v4: uuidv4 } = require('uuid');
const products = require('../data/products');
const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../middleware/errorHandler').AppError;

// Get all products (supports category filter, search, pagination)
exports.getAllProducts = asyncHandler((req, res) => {
  let filtered = [...products];
  const { category, search, page = 1, limit = 5 } = req.query;

  if (category) filtered = filtered.filter(p => p.category === category);
  if (search) filtered = filtered.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  const start = (page - 1) * limit;
  const end = start + parseInt(limit);

  res.json({
    total: filtered.length,
    page: parseInt(page),
    products: filtered.slice(start, end)
  });
});

// Get product by ID
exports.getProductById = asyncHandler((req, res, next) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return next(new AppError('Product not found', 404));
  res.json(product);
});

// Create a new product
exports.createProduct = asyncHandler((req, res) => {
  const newProduct = { id: uuidv4(), ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Update existing product
exports.updateProduct = asyncHandler((req, res, next) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return next(new AppError('Product not found', 404));

  products[index] = { ...products[index], ...req.body };
  res.json(products[index]);
});

// Delete a product
exports.deleteProduct = asyncHandler((req, res, next) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return next(new AppError('Product not found', 404));

  const deleted = products.splice(index, 1);
  res.json({ message: 'Product deleted successfully', product: deleted[0] });
});

// Product statistics (count by category)
exports.getProductStats = asyncHandler((req, res) => {
  const stats = {};
  for (const product of products) {
    stats[product.category] = (stats[product.category] || 0) + 1;
  }
  res.json(stats);
});
