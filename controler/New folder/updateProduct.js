
const fs = require('fs');
const path = require('path');
exports.updateProduct = (req, res) => {
  const id = req.params.id;
  const { productName, price, description, imageUrl } = req.body;

  const filePath = path.join(__dirname, '../data/productData.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    let products = [];

    if (!err && data) {
      products = JSON.parse(data);
    }

    const updatedProducts = products.map(item => {
      if (item.id === id) {
        return {
          id,
          productName,
          price,
          description,
          imageUrl
        };
      }
      return item;
    });

    fs.writeFile(filePath, JSON.stringify(updatedProducts, null, 2), (err) => {
      if (err) console.log(err);

      res.redirect('/author');
    });
  });
};