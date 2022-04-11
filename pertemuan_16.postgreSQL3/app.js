const express = require('express')

const app = express()

const pool = require("./db")

app.use(express.json()) // => res.body
const port = 3000

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

app.get("/list", async (req, res) =>{
    try{
        const newCont = await pool.query(`SELECT * FROM contacs`)
        res.json(newCont.rows)
    } catch (err){
        console.error(err.message)
    }
})
// menampilkan detail contact
app.get("/detail/:name", async (req, res) =>{
    try{
        const newCont = await pool.query(`SELECT * FROM contacs WHERE name = ('${req.params.name}') `)
        res.json(newCont.rows)
    } catch (err){
        console.error(err.message)
    }
})

// menghapus contact
app.get("/delete/:name", async (req, res) =>{
    try{
        const newCont = await pool.query(`DELETE FROM contacs WHERE name = ('${req.params.name}') `)
        res.redirect('/list')
        // res.json(newCont.rows)
    } catch (err){
        console.error(err.message)
    }
})
app.listen(port, () =>{
    console.log('Example app listening on port $(port)')
})