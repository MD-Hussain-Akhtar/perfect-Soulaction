
const fs = require('fs');
const path = require('path');
exports.deleteProduct = (req, res) => {
  const id = req.params.id;
  const filePath = path.join(__dirname, '../data/productData.json');

  let newData = [];

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (!err && data) {
      newData = JSON.parse(data);
    }

    // 🔥 DELETE LOGIC
    const updatedData = newData.filter(item => item.id !== id);

    fs.writeFile(filePath, JSON.stringify(updatedData, null, 2), (err) => {
      if (err) {
        console.log("delete error", err);
      }

      res.redirect('/author');
    });
  });
};