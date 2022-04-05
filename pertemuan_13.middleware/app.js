const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const morgan = require('morgan')
const contacts = require("./contacts");
const port = 3000

// Set Templating Engines
app.use(expressLayouts)

// set morgan
app.use(morgan('dev'))

// set express json
app.use(express.json());

// Static Middleware 
 app.use(express.static('public'));
 app.use(express.urlencoded())

//information using ejs
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    const nama = 'nida';
    const page = "Web Server Node JS";
    //const cont = contacts.loadContact();
    res.render("index.ejs", {nama, page});  

})  

app.get('/about', (req, res) => {
    const page = 'About page'
    res.render("about.ejs", {page}); 
})

app.get('/contact', (req, res) => {
    const page = 'Contact List'
    const cont = contacts.loadContact();
    res.render("contact.ejs", {page, cont});  
})
app.get('/add', (req, res) => {
    const page = 'Add Users'
    res.render("add_contact", {page});  
})


//data contact process
app.post('/contact', (req, res) => {
    //console.log(req.body)
    const save = contacts.saveContact(req.body.name, req.body.email, req.body.mobile);
    res.render("add_contact", {save}); 
    //res.send("now data is added")
    
})

const isEmpty = value => {
    value === undefined ||
    value === null ||
    (typeof value === "Object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)

}
app.get('/detail/:name', (req, res) => {
    const page = 'Detail page'
    const cont = contacts.DataContact(req.params.name); 
    res.render("detail", {page, cont});
     
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

// const fs = require('fs');
// const http = require('http');
// const url = require('inspector');



// http
//     .createServer((req,res)=>{
//         const url = req.url;
//         console.log(url);

//         res.writeHead(200,{
//             'content-type' : 'text/html',
//         });
        
//         function pathname (path, res){
//             fs.readFile(path,(err,data)=>{
//             if(err){
//                 res.writeHead(404);
//                 res.write('Error : page not found');
//             } else{
//                 res.write(data)
//             }
//             res.end();
//         });
//         }

//         if(url ==='/about'){
//             pathname('./about.html', res);
//         } else if(url ==='/contact'){
//             pathname('./contact.html', res);
//         } else{
//             //res.write("Hello World");
//             pathname('./index.html', res);
//         }
// })
//     .listen(3000,()=>{
//         console.log('server is listening on port 3000')
//     });