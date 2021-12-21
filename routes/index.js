const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

// const cors = require('cors')
// router.use(cors())
// router.options('*', cors())

router.get('/', (req, res) => res.send('This is root!'));

router.get('/categories', controllers.getAllCategories);
router.get('/products', controllers.getAllProducts);
router.get('/products/:id', controllers.getProductById);
router.delete('/products/:id', controllers.deleteProduct);
// router.post('/ui/products', controllers.addProduct);
// router.put('ui/products/:id', controllers.updateProduct);

// router.post('/rollercoasters/reviews', controllers.postReview);

module.exports = router;
