const http=require("http");
const fs=require("fs");

http.createServer(function(req,res){

fs.readFile("./"+req.url,function(err,data){
console.log(req.url);
	if(err)
	{
		res.statusCode=404;
		res.end("Wops!");
	}
	res.statuscode=200;
	res.end(data);	

});

}).listen(4242);
