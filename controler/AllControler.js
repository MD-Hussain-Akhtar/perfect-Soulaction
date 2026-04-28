const db = require('../utils/databaseutils');

// ================= HOME =================
exports.home = (req, res) => {
  db.execute('SELECT * FROM homes')
    .then(([rows]) => {
      res.render('index', {
        newData: rows,
        active: "home",
        pageTitle: "Home Page"
      });
    });
};

// ================= ABOUT =================
exports.about = (req, res) => {
  res.render('about', { active: "about" });
};

// ================= CONTACT =================
exports.contact = (req, res) => {
  res.render('contact', { active: "contact",pageTitle:"Contact" });
};

// ================= AUTHOR =================
exports.author = (req, res) => {
  db.execute('SELECT * FROM homes')
    .then(([rows]) => {
      res.render('author', {
        newData: rows,
        active: "author",
        pageTitle: "Author Page"   // ✔ ADD THIS
      });
    });
};

// ================= ADD PRODUCT =================
exports.addProduct = (req, res) => {
  const { productName, price, description, imageUrl } = req.body;

  db.execute(
    'INSERT INTO homes (hoseName, price, DESCRIPTION, imageUrl) VALUES (?, ?, ?, ?)',
    [productName, price, description, imageUrl]
  ).then(() => res.redirect('/author'));
};

// ================= DELETE =================
exports.deleteProduct = (req, res) => {
  db.execute('DELETE FROM homes WHERE id = ?', [req.params.id])
    .then(() => res.redirect('/author'));
};

// ================= EDIT =================
exports.editForm = (req, res) => {
  db.execute('SELECT * FROM homes WHERE id = ?', [req.params.id])
    .then(([rows]) => {
      res.render('edit', { product: rows[0], active: "author" });
    });
};

// ================= UPDATE =================
exports.updateProduct = (req, res) => {
  const { productName, price, description, imageUrl } = req.body;

  db.execute(
    'UPDATE homes SET hoseName=?, price=?, DESCRIPTION=?, imageUrl=? WHERE id=?',
    [productName, price, description, imageUrl, req.params.id]
  ).then(() => res.render('author'));
};

// ================= PRODUCTS =================
exports.products = (req, res) => {
  db.execute('SELECT * FROM homes')
    .then(([rows]) => {
      res.render('products', {
        newData: rows,
        active: "products",
        pageTitle: "Products Page"
      });
    });
};

// ================= DETAILS =================
exports.productDetails = (req, res) => {
  db.execute('SELECT * FROM homes WHERE id = ?', [req.params.id])
    .then(([rows]) => {
      if (!rows.length) return res.status(404).render('404');
      res.render('productDetails', { product: rows[0], active: "products" });
    });
};

// ================= LOGIN =================
exports.login = (req, res) => {
  res.render('login', { errorMessage: null, active: "login" });
};

exports.loginPost = (req, res) => {
  const { username, password } = req.body;

  if (username === "Hussain" && password === "123") {
    return res.redirect('/author');
  }

  res.render('login', { errorMessage: "Invalid login", active: "login" });
};

// ================= 404 =================
exports.notFound = (req, res) => {
  res.status(404).render('404', { active: "" });
};