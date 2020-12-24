const http = require('http');
const app = require('./Routes/app');
const port = process.env.port || 5000;
const server =  http.createServer(app).listen(port);
server.on('listening',()=>{
 console.log(`App listening on port ${port}`);
})
server.on('error',()=>{
   console.log(error);
})
