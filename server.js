const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./router/AllRouter'));
const db=require("./utils/databaseutils");
db.execute('SELECT * FROM homes').then(([rows,fields])=>{
   rows.forEach(item=>console.log("Product Name:",item.hoseName))

}).catch(error=>{
 console.log("error  while reading for homes",error)
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
 

