const router = require('express').Router()
const productCtrl = require('../controller/productCtril')

router.route('/')
    .get(productCtrl.getProducts)
    .post(productCtrl.createProducts)

router.route('/:id')
    .delete(productCtrl.deleteProducts)
    .put(productCtrl.updateProducts)

module.exports = router