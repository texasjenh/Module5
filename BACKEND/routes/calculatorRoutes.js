// ***SLIDE 32 EXAMPLE****

// const express = require('express');
// const router = express.Router();

// // new route for adding two numbers
// router.get('/add', (req, res) => {
//     res.send('Add')
// })

// module.exports = router;


// ***SLIDE 33 EXAMPLE****

// const express = require('express');
// const router = express.Router();

// // new route for adding two numbers
// router.get('/add', (req, res) => {
//     console.log(req.query)
//     res.send(req.query)
// })

// module.exports = router;


// ****SLIDE 34 EXAMPLE****

// const express = require('express');
// const router = express.Router();

// ROUTE FOR ADDING TWO NUMBERS
// router.get('/add', (req, res) => {
//     let number1 = parseInt(req.query.num1);
//     let number2 = parseInt(req.query.num2);
//     let sum = number1 + number2
//     console.log(sum)
//     res.status(200)
//     res.json({result:sum})
// })

// ****SLIDE 36 EXERCISE #2****

// ROUTE FOR SUBTRACTING TWO NUMBERS
// router.get('/subtract', (req, res) => {
//     let number1 = parseInt(req.query.num1);
//     let number2 = parseInt(req.query.num2);
//     let difference = number1 - number2
//     console.log(difference)
//     res.status(200)
//     res.json({result:difference})
// })

// ROUTE FOR MULTIPLYING TWO NUMBERS
// router.get('/multiply', (req, res) => {
//     let number1 = parseInt(req.query.num1);
//     let number2 = parseInt(req.query.num2);
//     let product = number1 * number2
//     console.log(product)
//     res.status(200)
//     res.json({result:product})
// })

// ROUTE FOR DIVIDING TWO NUMBERS (he used "fraction" instead of 'quotient', will it make a difference?)
// router.get('/divide', (req, res) => {
//     let number1 = parseInt(req.query.num1);
//     let number2 = parseInt(req.query.num2);
//     let quotient = number1 / number2
//     console.log(quotient)
//     res.status(200)
//     res.json({result:quotient})
// })
// module.exports = router;


// ****SLIDE 47 - BASIC CONTROLLER****

const express = require('express');
const calculatorController = require('../controllers/calculatorController')
const router = express.Router();

router.get('/add', (req, res) => {
    calculatorController.addNumbers(req,res)
})

router.get('/subtract', (req, res) => {
    calculatorController.subtractNumbers(req,res)
})

router.get('/multiply', (req, res) => {
    calculatorController.multiplyNumbers(req,res)
})

router.get('/divide', (req, res) => {
    calculatorController.divideNumbers(req,res)
})

module.exports = router;