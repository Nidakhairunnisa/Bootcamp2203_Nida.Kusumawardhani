const express = require('express')
const app = express()
const port = 3002

//import body parser
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const database = require('./db')
const cors = require('cors');

app.use(cors());

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/customer', (req, res) => {
  database.getCustomer()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

//app.get('/customer', database.getCustomer)
app.get('/customer/:id', database.getCustomerById)
app.post('/customer', database.createCustomer)
app.put('/customer/:id', database.updateCustomer)
app.delete('/customer/:id', database.deleteCustomer)



  // app.post('/customer:id', (req, res) => {
  //   database.getCustomerByIdr()
  //   .then(response => {
  //     res.status(200).send(response);
  //   })
  //   .catch(error => {
  //     res.status(500).send(error);
  //   })
  // })

// app.get('/product', (req, res) => {
//     database.getProduct()
//     .then(response => {
//       res.status(200).send(response);
//     })
//     .catch(error => {
//       res.status(500).send(error);
//     })
//   })

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})