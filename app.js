require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const indexRouter = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

// 设置静态文件目录
app.use(express.static('public'));

// 设置模板引擎
app.use(expressLayouts);
app.set('layout', 'layouts/layout'); 
app.set('view engine', 'ejs');


app.use('/', indexRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
