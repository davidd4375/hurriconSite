var express = require("express");
var app     = express();
var path    = require("path");
var port    = process.env.PORT

app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/home.html'));
});

app.listen(port);

console.log("Hurricon site running");