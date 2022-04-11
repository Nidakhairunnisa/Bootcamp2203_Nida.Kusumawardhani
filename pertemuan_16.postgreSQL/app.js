const express = require('express')

const app = express()

const pool = require("./db")

app.use(express.json()) // => res.body
const port = 3000

//menambahkan data contacts
app.get("/addasync", async (req, res) =>{
    try{
        const name = "syifa"
        const mobile = "085412434321"
        const email = "syifa@gmail.com"
        const newCont = await pool.query(`INSERT INTO contacs VALUES ('${name}', '${mobile}', '${email}') RETURNING *`)
        res.json(newCont)
    } catch (err){
        console.error(err.message)
    }
})

// menampilkan list data contacts
app.get("/list", async (req, res) =>{
    try{
        const newCont = await pool.query(`SELECT * FROM contacs`)
        res.json(newCont.rows) // menampilkan data row json
    } catch (err){
        console.error(err.message)
    }
})


app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})