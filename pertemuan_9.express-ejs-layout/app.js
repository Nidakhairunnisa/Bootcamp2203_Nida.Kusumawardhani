const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000

// Set Templating Engines
app.use(expressLayouts)

//information using ejs
app.set('view engine', 'ejs')

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.get('/', (req, res) => {
    const nama = 'nida';
    const page = "Web Server Node JS";
    cont =[
    ]
    res.render("index.ejs", {nama, page, cont});  
})  

app.get('/about', (req, res) => {
    const page = 'About page'
    res.render("about.ejs", {page});

})
app.get('/contact', (req, res) => {
    const page = 'Contact page'
    res.render("contact.ejs", {page});  
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