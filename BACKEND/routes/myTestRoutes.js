const express = require('express');
const router = express.Router();

router.get('/example1', (req, res) => {
    res.send('Hello World! Example 1')
})

router.get('/example2', (req, res) => {
    res.send('Hello World! Example 2')
})

module.exports = router;