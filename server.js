var connect = require('connect');
var http = require('http');
 
var app = connect();
function helloworld(req,res,next)
{
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
}

function contact(req,res,next)
{
  res.setHeader('Content-Type', 'text/plain');
  res.end(contact.ejs);
}


app.use('/About',helloworld);
app.use('/Contact',contact);
app.listen(3000);
console.log('Server is running on local host')