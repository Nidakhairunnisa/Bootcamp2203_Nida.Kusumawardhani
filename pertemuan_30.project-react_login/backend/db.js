const Pool = require('pg').Pool
const jwt = require('jsonwebtoken')
const config= require('./app/config')
const secretKey = config.secret

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'project-react',
  password: 'Bukalah123',
  port: 5432,
});
  const getAdmin = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT id_admin, password FROM admin', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }

  // const Login = () => {
  //   return new Promise(function(resolve, reject) {
  //     const {email_admin} = req.body;
  //     pool.query(`SELECT * FROM admin WHERE email_admin = $1;`, [email_admin], (error, results) => {
  //       if (error) {
  //         reject(error)
  //       }
  //       resolve(results.rows);
  //     })
  //   }) 
  // }

  const Login = async (req, res) => {

    const { email, password } = req.body;
    try{
      const data = await pool.query(`SELECT * FROM admin WHERE email= $1;`, [email]) //Verifying if the user exists in the database
      const admin = data.rows;
      if (admin.length === 0) {
        res.status(400).json({
        error: "User is not registered, Sign Up first",
        });
      } else {
        bcrypt.compare( password, user[0].password, (err, result) => { //Comparing the hashed password
          if (err) {
            res.status(500).json({
            error: "Server error",
          });
          } else if (result === true) { //Checking if credentials match
            const token = jwt.sign(
              {
              email_admin: email_admin,
              },
              secretKey
              );
              res.status(200).json({
                message: "User signed in!",
                token: token,
                });
          } else {
            //Declaring the errors
            if (result != true)
            res.status(400).json({
              error: "Enter correct password!",
            });
          }
        })
      }
    } catch (error){
      console.log(err);
      res.status(500).json({
      error: "Database error occurred while signing in!", //Database connection error
      });
    }
  //     res.json({ success: false, message: 'Admin tidak ada di database'});
  //   } else {
  //     if (password != req.body.password){
  //       res.json({ success: false, message: 'password admin salah!'});
  //     } else {
  //       const token = jwt.sign({
  //         email_admin: email_admin,
  //         }, secretKey,{
  //         expiresIn: "24h"
  //       })

  //       //mengirim balik token
  //       res.status(200).json({
  //         message: "User signed in!",
  //         token: token,
  //         });
  //     }
  //   }
   }

  module.exports = {
    getAdmin,
    Login
  }