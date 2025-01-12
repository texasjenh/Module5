// ****EXAMPLE 1 PG 11-13****

// console.log('Hello World')

// ****EXAMPLE 2 PG 14-17****

// const express = require('express')
// const app = express()
// const port = 3000
// app.get('/', (req, res) => {
//  res.send('Hello World!')
// })

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/test', (req, res) => {
//   res.send('This is a test')
// })

// app.listen(port, () => {
//  console.log(`Example app listening at http://localhost:${port}`)
// })

// ****EXERCISE 1 PG 18 ****
// Create a basic back-end application with multiple web servers running on different ports. 

// const express = require('express')

// const app1 = express()
// const port1 = 3060

// app1.get('/', (req, res) => {
//     res.send('Hello App 1!')
// })

// const app2 = express()
// const port2 = 3065

// app2.get('/', (req, res) => {
//     res.send('Hello App 2!')
// })

// app1.listen(port1, () =>{
//     console.log(`Example app listening at http://localhost:${port1}`)
// })

// app2.listen(port2, () => {
//     console.log(`Example app listening at http://localhost:${port2}`)
// })


// ****EXAMPLE 3 - PG 24-26****

// const testRoutes = require('./routes/myTestRoutes')

// const express = require('express')
// const app = express()
// const port = 3050

// app.use('/', express.static('public'))

// app.use('/myexamples', testRoutes)

// app.get('/users', (req, res) => {
//  res.send('Hello Friends!')
// })

// app.listen(port, () => {
//  console.log(`Example app listening at http://localhost:${port}`)
// })


// ****EXAMPLE 4 PG 32-35****

// const calculatorRoutes = require('./routes/calculatorRoutes')
// const express = require('express')
// const app = express()
// const port = 3050

// app.use('/', express.static('public'))

// app.use('/calculator', calculatorRoutes)

// app.get('/users', (req, res) => {
//   res.send('Hello Friends!')
// })

// app.listen(port, () => {
//  console.log(`Example app listening at http://localhost:${port}`)
// })


// ****SLIDE 39 - DYNAMIC PARAMETERS EXAMPLE****

// const calculatorRoutes = require('./routes/calculatorRoutes')

// const userRoutes = require('./routes/userRoutes')

// ****M5LAB4****

// const friendRoutes = require('./routes/friendRoutes');

// const express = require('express')
// const app = express()
// const port = 3050

// app.use(express.json())

// app.use('/', express.static('public'))

// app.use('/friends', friendRoutes);

// app.use('/myexamples', testRoutes)

// app.use('/calculator', calculatorRoutes)

// app.use('/users', userRoutes)

// app.get('/users', (req, res) => {
//    res.send('Hello Friends')
// })

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
//     })


// ****SLIDE 58 - API TEST****
const app = require('./app')
const port = 3050

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    })