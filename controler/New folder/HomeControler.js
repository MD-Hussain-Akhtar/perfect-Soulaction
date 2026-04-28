
const fs = require('fs');
const path = require('path');
exports.HomeControler = (req, res) => {
  const filePath = path.join(__dirname, '../data/productData.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    let products = [];

    if (!err && data) {
      products = JSON.parse(data);
    }

    res.render('index', {
      pageTitle: "Home",
      active: "Home",
      newData: products   // 👈 send products here
    });
  });
};