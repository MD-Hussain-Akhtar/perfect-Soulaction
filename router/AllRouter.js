const express = require('express');
const router = express.Router();

const controller = require('../controler/AllControler'); // ✔ FIX SPELLING

// ================= ROUTES =================
router.get('/', controller.home);
router.get('/author', controller.author);

router.get('/contact',controller.contact)
router.get('/about',controller.about)
router.post('/add-product', controller.addProduct);

router.get('/delete/:id', controller.deleteProduct);

router.get('/edit/:id', controller.editForm);
router.post('/update/:id', controller.updateProduct);

router.get('/products', controller.products);
router.get('/products/:id', controller.productDetails);

router.get('/login', controller.login);
router.post('/login', controller.loginPost);

// ================= 404 (SAFE WAY) =================
router.use(controller.notFound);

module.exports = router;