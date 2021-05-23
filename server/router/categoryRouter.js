const router = require('express').Router()
const categroyCtrl = require('../controller/categoryCtrl')
const authAdmin = require('../middleware/adminAuth')
const auth = require('../middleware/auth')

router.route('/category')
    .get(categroyCtrl.getCategories)
    .post(auth, authAdmin, categroyCtrl.createCategory)

router.route('/category/:id')
    .delete(auth, authAdmin, categroyCtrl.deleteCategory)

router.route('/category/:id')
    .put(auth, authAdmin, categroyCtrl.updateCategory)

module.exports = router