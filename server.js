const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./router/AllRouter'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
 