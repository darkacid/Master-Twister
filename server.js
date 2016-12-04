const http_server = require("http");
const fs = require("fs");
const querystring= require("querystring");


http_server.createServer(function(req,res)
{
  const method =req.method;
  const url = req.url;

  if(req.url=="/")req.url="/index.html";
  fs.readFile("./public"+req.url,function(err,data)
  {
    if(err)
    {
      res.statuscode=404;
      res.end("You screwed up!");
    }
    res.statuscode=200;
    res.end(data);
  });

  if(req.url.indexOf=="/todos">=0)
    switch(method)
    {
      case "GET":
      processGet();
      break;


    }





}).listen(4242);
