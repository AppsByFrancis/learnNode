const http = require('http');

const server = http.createServer((req, res) =>{ //req and response are objects
    console.log(req)
     res.write('when somebody connects to our server, this is the response he gets');
     res.end();
});
server.on('request', (req,res) => {  //this is a built-in event listener, that listen for 
    res.end('welcome')               // requests
})
server.listen(5320) //before server can do something, it must listen at a certain port