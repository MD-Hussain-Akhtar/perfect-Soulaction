
const fs = require('fs');
const path = require('path');
exports.editProductForm = (req, res) => {
  const id = req.params.id;
  const filePath = path.join(__dirname, '../data/productData.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    let products = [];

    if (!err && data) {
      products = JSON.parse(data);
    }

    const product = products.find(item => item.id === id);

    res.render('edit', {
      pageTitle: "Edit Product",
      product
    });
  });
};