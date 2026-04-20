
const fs = require('fs');
const path = require('path');
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