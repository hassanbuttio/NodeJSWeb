const http = require('http');

const server = http.createServer((req,res)=>{
	if(req.url=="/"){
			res.setHeader("content-type","text/html");

		res.status=200;
		res.write("<h1>hello Page one</h1>");
	}
	else{
	    res.setHeader("content-type","text/html");

		res.status=404;
		res.write("<h1>hello Page two</h1>");
	}
res.end();

})
server.listen(3000,()=>console.log("Server Running"));