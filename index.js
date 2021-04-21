const http = require('http');
const port = 8000;

// importing fs module to read html files
const fs = require('fs');

function requestHandler(req,res){
    console.log(req.url);
    res.writeHead(200, {'content-type': 'text/html'})

    // readFile function reads the html file, data contains the contents of the html file
    fs.readFile('./index.html', function(err, data){
        if(err){
            console.log('error', err);
            return res.end('<h1>There is an error!</h1>')
        }
        return res.end(data);
    });
}

const server = http.createServer(requestHandler);
server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is up and running on port: ",port);
});