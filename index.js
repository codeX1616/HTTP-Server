const http = require('http');
const port = 8000;
const fs = require('fs');

function requestHandler(req,res){
    console.log(req.url);
    res.writeHead(200, {'content-type': 'text/html'});

    // filePath stores which html file to open
    let filePath;
    switch(req.url){
        case '/':
            filePath = './index.html'
            break;
        case '/profile':
            filePath = './profile.html'
            break;
        default:
            filePath = './error.html'
    }

    // filePath is passed as argument to readFile function
    fs.readFile(filePath, function(err, data){
        if(err){
            console.log(err);
            return res.end('<h1>Error!</h1>')
        }
        return res.end(data);
    })

}

const server = http.createServer(requestHandler);
server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is up and running on port: ",port);
});