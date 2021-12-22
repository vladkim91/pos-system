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
// router.post('/products', controllers.addProduct);
router.delete('/products/:id', controllers.deleteProduct);
router.put('/products/:id', controllers.updateProduct);
router.put('/banks', controllers.updateBank);
router.get('/banks', controllers.getBank);

// router.post('/rollercoasters/reviews', controllers.postReview);

module.exports = router;
