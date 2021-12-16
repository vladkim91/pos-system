const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

// const cors = require('cors')
// router.use(cors())
// router.options('*', cors())

router.get('/', (req, res) => res.send('This is root!'));

router.get('/ui/categories', controllers.getAllCategories);
router.get('/ui/products', controllers.getAllProducts);

// router.post('/rollercoasters/reviews', controllers.postReview);

module.exports = router;
