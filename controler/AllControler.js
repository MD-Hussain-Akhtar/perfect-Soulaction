

const fs = require('fs');
const path = require('path');

exports.HomeControler = (req, res) => {
  const filePath = path.join(__dirname, '../data/productData.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    let newData = [];

    if (!err && data) {
      newData = JSON.parse(data);
    }

    res.render('index', {
      pageTitle: "Home",
      active: "Home",
      newData   // ✅ ye add karo
    });
  });
};

exports.AboutControler = (req, res) => {
  res.render("about", { pageTitle: "About", active: "About" });
};

exports.ContectControler = (req, res) => {
  res.render("contact", { pageTitle: "Contact", active: "Contact" });
};

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

exports.addProduct = (req, res) => {
  const { productName, price,description,imageUrl, } = req.body;
  const filePath=path.join(__dirname,'../data/productData.json')
  let newData = [];
  fs.readFile(filePath,'utf8',(err,data)=>{
    if(!err && data){
      newData=JSON.parse(data)
    }
    newData.push({id: Date.now().toString(), productName, price, description, imageUrl})
    fs.writeFile(filePath,JSON.stringify(newData,null,2),(err,data)=>{
  if(err){
     console.log("file in  write error ",err)
  }
  res.redirect('/author')
    });
  });

}



exports.LoginControler = (req, res) => {
  res.render("login", { pageTitle: "Login", username: null, active: "Login" });
};

exports.LoginPostControler = (req, res) => {
  const { username, password } = req.body;

  if (username === "Hussain" && password === "123") {
    return res.redirect("/author");
  }

  return res.render("login", {
    pageTitle: "Login",
    active: "Login",
    errorMessage: "Invalid username or password"
  });
};
exports.products = (req, res) => {
   const filePath=path.join(__dirname,'../data/productData.json')
   let newData=[];
   fs.readFile(filePath,'utf8',(err,data)=>{
    if(!err && data){
      newData=JSON.parse(data)
    }
  console.log(newData)
    res.render("products", { active: 'Products',newData })
   })
}
exports.NotFoundControler = ((req, res) => {
  res.status(404).render('404', { active: '' })
});


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
        return { id, productName, price, description, imageUrl };
      }
      return item;
    });

    fs.writeFile(filePath, JSON.stringify(updatedProducts, null, 2), () => {
      res.redirect('/author');
    });
  });
};