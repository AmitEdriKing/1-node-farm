const fs = require('fs');
const http = require('http');
const url = require('url');

//FILES
//Blocking, synchronous way
/* const textinput = fs.readFileSync('./txt/input.txt','utf-8')
console.log(textinput);

const textToAdd = `this is what we know about the avocado ${textinput} .\nCreated on ${Date.now()}`;
const textinputAfterChange = fs.writeFileSync('./txt/input.txt',textToAdd);
console.log(textinputAfterChange);
console.log('file written'); */

/* //Non blocking Asynchronous way
fs.readFile('./txt/start.txt','utf-8' ,(err ,data1) => {
    if(err) return console.log('error 🤬')


    fs.readFile(`./txt/${data1}.txt`,'utf-8' ,(err ,data2) => {
        console.log(data2);
        fs.readFile('./txt/append.txt','utf-8' ,(err ,data3) => {
            console.log(data3);

            fs.writeFile('./txt/final.txt',`${data2}\n${data3}`,'utf-8', (err) => {
                console.log('your file has been written 🤓');
            });
        });
    });
});
console.log('Will read file!');
 */

 //FILES

 const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`,'utf-8');
 const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`,'utf-8');
 const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`,'utf-8');

 const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');
 const DataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
    console.log(req.url);

    const pathName = req.url;
    //Overview
    if(pathName === '/' || pathName === '/overview'){
        
        res.end(tempOverview);
    //product page
    }else if(pathName === '/product'){
        res.end('this is a product');
    //Api
    }else if(pathName === '/api'){
        res.writeHead(200 , {'Content-type' : 'application/json'});
        res.end(data);
    //Not found
    } else {
        res.writeHead(404, {
            'Content-type' : 'text/html',
            'my-own-header' : 'hello World'
        });
        res.end('<h1>this page cannot be found</h1>');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('listening to request on port 8000');
});
 
