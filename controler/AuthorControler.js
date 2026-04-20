
const fs = require('fs');
const path = require('path');
exports.AuthorControler = (req, res) => {
  const filePath = path.join(__dirname, '../data/productData.json');
  let newData = [];

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (!err && data) {
      newData = JSON.parse(data);
    }

    res.render("author", {
      pageTitle: "Author",
      active: 'author',
      newData
    });
  });
};