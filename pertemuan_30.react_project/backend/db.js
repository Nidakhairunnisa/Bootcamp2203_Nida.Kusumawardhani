const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'project_db',
  password: 'Bukalah123',
  port: 5432,
});

// Customer
const getCustomer = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM customer ORDER BY id_customer ASC', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }

const getCustomerById = (req, res) => {
      const { id } = req.params;
      pool.query('SELECT * FROM customer WHERE id_customer = $1', [id], (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results.rows)
      })
  }

  const createCustomer = (request, response) => {
      const { name_custoner, mobile_customer, email_customer } = request.body
      pool.query('INSERT INTO customer (id_customer, name_custoner, mobile_customer, email_customer) VALUES (DEFAULT, :goto 1886$1, $2, $3)', [name_custoner, mobile_customer, email_customer], (error, results) => {
        if (error) {
          throw error
        }
        response.status(201).send(`User added with ID: ${result.insertId}`)
      })
  }

const updateCustomer = (req, res) => {
      const { id } = req.params;
      const { name_custoner, mobile_customer, email_customer } = request.body
      pool.query('UPDATE customer SET name_customer = $1, mobile_customer = $2, email_customer = $3 WHERE id_customer = $4', [name_custoner, mobile_customer, email_customer, id], (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      })
  }

  const deleteCustomer = (req, res) => {
    const { id } = req.params;
      pool.query('DELETE FROM customer WHERE id = $1', [id], (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).send(`User deleted with ID: ${id}`)
      })
  }


  const getProduct = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT id_barang, nama_barang FROM product ORDER BY id_barang ASC', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }

  module.exports = {
    getCustomer,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer,
    getProduct
  }