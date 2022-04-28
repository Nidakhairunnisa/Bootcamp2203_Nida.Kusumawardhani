const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'contacts_db',
  password: 'Bukalah123',
  port: 5432,
});

const getContact = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM contact ORDER BY id ASC', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }

  module.exports = {
    getContact
  }