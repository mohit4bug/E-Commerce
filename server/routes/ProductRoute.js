const { GetAllProducts } = require('../controllers/ProductController')
const router = require('express').Router()



router.route('/products').get(GetAllProducts)

module.exports = router