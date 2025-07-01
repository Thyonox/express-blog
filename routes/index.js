// 通用路由
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    const locals = {
        title: 'Express Blog',
        description: 'A simple blog built with Express and EJS'
    };
    res.render('index', { locals });
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;
