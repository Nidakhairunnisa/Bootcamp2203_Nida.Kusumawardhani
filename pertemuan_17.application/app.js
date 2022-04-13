const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const morgan = require('morgan')
const pool = require("./db")
const { body, validationResult, check } = require('express-validator');
const res = require('express/lib/response')
const port = 3000

// Set Templating Engines
app.use(expressLayouts)

// set morgan
app.use(morgan('dev'))

// set express json
app.use(express.json());

// Static Middleware 
 app.use(express.static('public'));
 app.use(express.urlencoded({extended :true}))

//information using ejs
app.set('view engine', 'ejs')

// Home page
app.get('/', (req, res) => {
    const nama = 'nida';
    const page = "Web Server Node JS";
    res.render("index.ejs", {nama, page});  
})  

// about page
app.get('/about', (req, res) => {
    const page = 'About page'
    res.render("about.ejs", {page}); 
})

// contact page
app.get('/contact', (req, res) => {
    const page = 'Contact List'
    const newCont = pool.query(`SELECT name, email FROM contacs`, function (err, result){
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.render("contact.ejs", {page, data : result.rows}); 
    })
})

// add contact page
app.get('/add', (req, res) => {
    const page = 'Add Users'
    res.render("add_contact", {page});  
})

// POST data -> add contact
app.post('/contact',
        body('name').custom(async(name, {req})=>{
            try{
                const {rows: detcont} = await pool.query(`SELECT name FROM contacs where name= '${name}'`)
                detcont.map(contact => {
                    if(contact){
                        throw new Error ('Duplicate name'); 
                    }
                    return true;
                })
            } catch (err){
                throw new Error ('Duplicate name'); 
            }
        }),
        check('email', 'Email not Valid').isEmail().normalizeEmail(), 
        check('mobile', 'Mobile not Valid').isMobilePhone('id-ID'),
        (req, res) => {         
            
            const errors = validationResult(req);
            if (errors)
            if (!errors.isEmpty()) {
                const notif = errors.array();
                res.render("add_contact", {notif})
            } else{
                    //insert database
                    const name = req.body.name
                    const email = req.body.email
                    const mobile = req.body.mobile
                    const newCont = pool.query(`INSERT INTO contacs VALUES ('${name}', '${email}', '${mobile}')`, function (err, result){
                        if (err) {
                            console.log("Error Saving : %s ", err);
                        }
                        
                    })
                    res.redirect('/contact')
                    //res.send("now data is added")
            }

    
})

// detail page
app.get('/detail/:name', (req, res) => {
    const newCont = pool.query(`SELECT * FROM contacs WHERE name = ('${req.params.name}')`, function (err, result){
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.render("detail", {data : result.rows})
    })

})

//menghapus data di page detail
app.get('/detail/del/:name', (req, res) => {
    const newCont = pool.query(`DELETE FROM contacs WHERE name = ('${req.params.name}')`, function (err, result){
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
            res.redirect('/contact')
    })

})

// update data di page detail
app.get('/detail/update/:name', (req, res) => {
    const newCont = pool.query(`SELECT * FROM contacs WHERE name = ('${req.params.name}')`, function (err, result){
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.render("update", {data : result.rows})
    })

})

//POST data update -> update contacts
app.post('/detail/update/:name',
        body('name').custom(async(name, {req})=>{
            try{
                //cek duplicate
                const {rows: detcont} = await pool.query(`SELECT name FROM contacs where name= '${name}'`)
                    detcont.map(contact => {
                        if(name !== contact && req.body.oldname){
                            throw new Error ('Duplicate name'); 
                        }
                        return true;
                    })
            } catch (err){
                throw new Error ('Duplicate name'); 
            }
        }), 
        check('email', 'Email not Valid').isEmail(), 
        check('mobile', 'Mobile not Valid').isMobilePhone('id-ID'),
        (req, res) => {         
            const errors = validationResult(req);
            const data = [req.body];
            if (!errors.isEmpty()) {
                const notif = errors.array();
                res.render("update", {notif, data})
            } else{
                const {name, email, mobile} = req.body
                const newCont = pool.query(`UPDATE contacs SET name = '${name}', email= '${email}', mobile = '${mobile}' WHERE name = '${req.params.name}'`, function (err, result){
                    if (err) {
                        console.log("Error Updating : %s ", err);
                    }
                    res.redirect('/contact')
                })
            }
})

// handling error
app.use(function(req, res, next) {

    var err = new Error('Not Found');
    err.status = 404;
    next(err);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})