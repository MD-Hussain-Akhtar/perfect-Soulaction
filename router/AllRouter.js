const express = require('express');
const router = express.Router();

const AllControler = require('../controler/AllControler');

// ✅ Correct usage (dot lagana zaroori hai)
router.get('/', AllControler.HomeControler);
router.get('/about', AllControler.AboutControler);
router.get('/contact', AllControler.ContectControler);

router.get('/author', AllControler.AuthorControler);
router.post('/author', AllControler.addProduct);

router.get('/products', AllControler.products);

router.get('/delete/:id', AllControler.deleteProduct);

router.get('/login-author', AllControler.LoginControler);
router.post('/login', AllControler.LoginPostControler);

router.get('/edit/:id', AllControler.editProductForm);

// ❗ YE MISSING THA (error ka reason ho sakta hai)
router.post('/update/:id', AllControler.updateProduct);

// ✅ 404 last
router.use(AllControler.NotFoundControler);

module.exports = router;