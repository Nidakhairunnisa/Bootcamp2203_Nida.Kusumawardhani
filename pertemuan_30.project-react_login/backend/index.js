// Setup
const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken')

// setup local
const app = express()
const port = 3001
const config = require('./app/config')
const database = require('./db');
const { JsonWebTokenError } = require('jsonwebtoken');
// const admin = require('app/models/admin')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors());
app.set('secretKey', config.secret)
app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

router.get('/', (req, res) => {
  res.send('Ini Toko')
})

//   // proteksi route dengan token
// router.use(function(res, req, next){
//   const token = req.header['authorization'];

//   //decode token
//   if(token){
//     jwt.verify(token, secretKey, function(err, decoded){
//       if(err){
//         return res.json({ success: false, message: 'problem dengan token'});
//       } else {
//         res.decoded = decoded;

//         //apakah sudah exp
//         if(decoded.exp == Date.now()/1000) {
//           return res.status(400).send({
//             success: false,
//             message: 'token sudah expire',
//             date  : date.now()/1000,
//             exp : decoded.exp 
//           })
//         }
//         next();
//       }
      
//     });

//   } else{
//     return res.status(403).send({
//       success: false,
//       message: 'token tidak tersedia'
//     })
//   }
// })

router.get('/admin', (req, res) => {
  database.getAdmin()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

  router.post('/login', (req, res) => {
    database.Login()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })

  router.get('/profile', function(res, req){
    res.json(req.decoded._doc)
  })

  app.use('/api', router)
app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})