const http = requiere('http')
const port=3000;
const server=http.createServer((req,res)=>{
  res.statusCode=200;
  res.setHeader('Content-Type','text/plain');
  res.end('Hola Mundo');
});
server.listen(port,()=>{
  console.log(´Server running on port:${port}´);
});
