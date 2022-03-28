const fs = require('fs');
const http = require('http');
const url = require('inspector');



http
    .createServer((req,res)=>{
        const url = req.url;
        console.log(url);

        res.writeHead(200,{
            'content-type' : 'text/html',
        });
        
        function pathname (path, res){
            fs.readFile(path,(err,data)=>{
            if(err){
                res.writeHead(404);
                res.write('Error : page not found');
            } else{
                res.write(data)
            }
            res.end();
        });
        }

        if(url ==='/about'){
            pathname('./about.html', res);
        } else if(url ==='/contact'){
            pathname('./contact.html', res);
        } else{
            //res.write("Hello World");
            pathname('./index.html', res);
        }
})
    .listen(3000,()=>{
        console.log('server is listening on port 3000')
    });