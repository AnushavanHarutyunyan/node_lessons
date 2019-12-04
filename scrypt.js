/*
const fs = require('fs');
fs.readFile('test.txt','utf-8',(err,data) =>{
    if(err){
        return console.log(err);
    }
    console.log(data);

});

const data = fs.readFileSync('test.txt','utf-8');*/


/*
const http = require('http');

http.createServer((req,res) =>{
    res.writeHead(200,{
        'Content-Type': 'text/html'
    });
    res.write('<h1>Heloo</h1>');
    res.end();
}).listen(8090);*/


// const http = require('http');
// const  fs = require('fs');

// http.createServer((req,res) =>{
//     res.writeHead(200,{
//         'Content-Type': 'text/html'
//     });
    
//     console.log(req.url);

//     fs.readFile('index.html','utf-8',(err,data) =>{
//         res.write(data);
//         res.end();
//     });

// }).listen(8080);

//tnaini kodne

// const http = require('http');
// const fs = require('fs');

// function senddataToClient(res, fileName = 'index.html', statusCode = 200) {
//     res.writeHead(statusCode, {
//         'Content-Type': 'text/html'
//     });

//     fs.readFile(fileName, 'utf8', (err, data) => {
//         res.write(data);
//         res.end();
//     });
// }

// http.createServer((req, res) => {
//     switch(req.url) {
//         case '/':
//             senddataToClient(res);
//         break;
//         case '/news':
//             senddataToClient(res, 'news.html');
//         break;
//         case '/contact':
//             senddataToClient(res, 'contact.html');
//         break;
//         default:
//             senddataToClient(res, '404.html', 404);
//     }

//     console.log(req.url);
// }).listen(8080); 


//////im gracse
// function sendToUserData(res, fileName = 'index.html', statusCode = 200){
//     res.writeHead(statusCode,{
//         'Content-Type': 'text/html'
//     });
//     fs.readFile(fileName,'utf8',(err,data) =>{
//         res.write(data);
//         res.end();
//     });
// }

// http.createServer((req,res) =>{
//     var path = req.url
//     console.log(path);
        
//     switch(path){
//         case '/':sendToUserData(res);break;

//         case '/news': sendToUserData(res,'news.html');break;

//         case '/contact': sendToUserData(res,'contact.html');break;

//         case '/.html':sendToUserData(res);break;

//         case '/news.html': sendToUserData(res,'news.html');break;

//         case '/contact.html': sendToUserData(res,'contact.html');break;
        
//         default: sendToUserData(res,'404.html',404);
//    }

   
// }).listen(8080);

//--------------aveli karch--------------------

// const http = require('http');
// const fs = require('fs');
// //harc data-urdic kvercne????
// function sendData (res, data, statusCode = 500) {
//     res.writeHead(statusCode, {
//         'Content-Type': 'text/html'
//     });
//     console.log(data);
    
//     res.write(data);
//     res.end();
// }

// function senddataToClient(res, fileName = 'insdex.html', statusCode = 200) {
//     fs.readFile(fileName, 'utf8', (err, data) => {
//         if (err) {
//             return sendData(res, '<h1>500</h1>');
//             //harc return ep kashxadi??????
//         }

//         sendData(res, data, statusCode)
//     });
// }

// http.createServer((req, res) => {
//     switch(req.url) {
//         case '/':
//             senddataToClient(res);
//         break;
//         case '/news':
//             senddataToClient(res, 'news.htm');
//         break;
//         case '/contact':
//             senddataToClient(res, 'contact.html');
//         break;
//         default:
//             senddataToClient(res, '404.html', 404);
//     }

//     console.log(req.url);
// }).listen(8080);




//-----------Komentner@------------------------

// const http = require('http');
// const fs = require('fs');

// /** 
//  * @function sendData
//  * send html data to client
//  * 
//  * @param {Object} res - response object
//  * @param {String} data - html content
//  * @param {Number} statusCode - http status code
// */
// function sendData (res, data, statusCode = 500) {
//     res.writeHead(statusCode, {
//         'Content-Type': 'text/html'
//     });

//     res.write(data);
//     res.end();
// }

// function senddataToClient(res, fileName = 'index.html', statusCode = 200) {
//     fs.readFile(fileName, 'utf8', (err, data) => {
//         if (err) {
//             return sendData(res, '<h1>500</h1>')
//         }

//         sendData(res, data, statusCode)
//     });
// }

// http.createServer((req, res) => {
//     switch(req.url) {
//         case '/':
//             senddataToClient(res);
//         break;
//         case '/news':
//             senddataToClient(res, 'news.htm');
//         break;
//         case '/contact':
//             senddataToClient(res, 'contact.html');
//         break;
//         default:
//             senddataToClient(res, '404.html', 404);
//     }

//     console.log(req.url);
// }).listen(8080);


//-----------------Lessons4----------------

// const http = require('http');
// const fs = require('fs');
// const url = require('url');

// http.createServer((req,res) => {
//     res.writeHead(200);
//     // const data = url.parse(req.url,true);
//     // console.log(data.query);
//     const data = url.parse(req.url,true).query;
//     console.log(data.name);
//     res.write('TEST');
//     res.end();
// }).listen(8080);

//------------------handznararutyun


const http = require('http');
const fs = require('fs');
const url = require('url');


const sendData = (fileName,res) => {

    fs.readFile(`${fileName}.html`,'utf-8',(err,data) => {
        if(err){
            if(err.code === 'ENOENT'){

            }
        }else{
            res.write(data);
        }
        res.end();
    });
};

http.createServer((req,res) => {
    res.writeHead(200);

    const { query:{page} } = url.parse(req.url,true);

    switch(page){
        case 'home': sendData('index',res);break;
        case 'contact': sendData('contact',res);break;
        case 'news': sendData('news',res);break;
        default: sendData('404',res);break;
    }
}).listen(8080);