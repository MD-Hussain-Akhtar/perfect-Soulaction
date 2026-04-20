
const fs = require('fs');
const path = require('path');
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


