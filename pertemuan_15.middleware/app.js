const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const morgan = require('morgan')
const contacts = require("./contacts");
const { body, validationResult, check } = require('express-validator');
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
    const cont = contacts.loadContact();
    res.render("contact.ejs", {page, cont});  
})

// add contact page
app.get('/add', (req, res) => {
    const page = 'Add Users'
    res.render("add_contact", {page});  
})

//data contact process
app.post('/contact',
        //check('name').exists().withMessage('duplicate name'),
        check('name', 'Duplicate name').custom(name=>{
            const duplicate = contacts.DuplicateContact(name);
            if(duplicate){
                throw new Error ('Duplicate name'); 
             }
             return true;
        }), 
        check('email', 'Email not Valid').isEmail(), 
        check('mobile', 'Mobile not Valid').isMobilePhone('id-ID'),
        (req, res) => {         
            
            const errors = validationResult(req);
            if (errors)
            if (!errors.isEmpty()) {
                const notif = errors.array();
                res.render("add_contact", {notif})
            } else{
                    //console.log(req.body)
                    contacts.saveContact(req.body);
                    res.redirect('/contact')
                    //res.send("now data is added")
            }

    
})
app.get('/contact/:name', (req, res) => {
    const data = contacts.DataContact(req.params.name); 
    res.render("contact", {data});
})
// celete checkbox
app.get('/contact/del/:name', (req, res) => {
    contacts.deleteContact(req.params.name);
    res.redirect('/contact');
})

// detail page
app.get('/detail/:name', (req, res) => {
    const page = 'Detail page'
    const data = contacts.DataContact(req.params.name); 
    res.render("detail", {page, data});
})



app.get('/detail/del/:name', (req, res) => {
    contacts.deleteContact(req.params.name);
    res.redirect('/contact')
})

app.get('/detail/update/:name', (req, res) => {
    const data = contacts.DataContact(req.params.name);
    res.render("update", {data})
})

//data contact process
app.post('/detail/update/:name',
        //check('name').exists().withMessage('duplicate name'),
        body('name', 'Duplicate name').custom(name=>{
            const duplicate = contacts.DuplicateContact(name);
            if(duplicate){
                throw new Error ('Duplicate name'); 
             }
             return true;
        }), 
        check('email', 'Email not Valid').isEmail(), 
        check('mobile', 'Mobile not Valid').isMobilePhone('id-ID'),
        (req, res) => {         
            // const data = contacts.updateContact(req.params.name);
            const errors = validationResult(req);
            if (errors)
            if (!errors.isEmpty()) {
                const notif = errors.array();
                res.render("update", {notif, data:req.body})
            } else{
                    //console.log(req.body)
                    contacts.updateContact(req.body);
                    res.redirect('/contact')
                    //res.send("now data is added")
            }
})

app.get('/product/:id', (req, res) => {  
    //console.log('category', req.query.category);
    req.query.category;
    res.send( "product id :" + req.params.id + '<br></br>' + "category id:" + req.query.category);  
})  


app.use(function(req, res, next) {

    var err = new Error('Not Found');
    err.status = 404;
    next(err);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})