const express = require('express')
const app = express()
const port = 3000

//information using ejs
app.set('view engine', 'ejs')

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.get('/', (req, res) => {
    const nama = 'nida';
    const title = "Webserver EJS";
    cont =[{
        nama : 'susi',
        email : 'susi@gmail.com',
    },
    {
        nama : 'tuti',
        email : 'tuti@gmail.com',
    },
    {
        nama : 'suni',
        email : 'suni@gmail.com',
    }
    ]
    res.render("index.ejs", {nama, title, cont});  
})  

app.get('/about', (req, res) => {
    res.render("about.ejs");  
})
app.get('/contact', (req, res) => {
    res.sendFile("contact.ejs");  
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