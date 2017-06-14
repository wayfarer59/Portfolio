var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var methodOverrride = require("method-override");
var connection = require("./connection");
var cloud = require("./cloud");
var app = express();
var PORT = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static('public/assets'))

app.get("/",function(req,res){
	connection.query("SELECT * FROM projects;",function(err,data){
		if(err) throw err;

		console.log(data);
	
		res.render("index",{projects:data});
	})

})


app.get("/#services",function(req,res){

	connection.query("SELECT * FROM projects;",function(err,data){
		if(err) throw err;
	console.log(data);
		res.render("index", {projects:data});
	});
});






// app.get("/",function(req,res){

// 	connection.query("SELECT * FROM projects;",function(err,data){
// 		if(err) throw err;
// 	console.log(data);
// 		res.render("index", {projects:data});
// 	});
// });

// app.post("/",function(req,res){

// 	connection.query("INSERT INTO projects(project_name, project_url) VALUES(?)", [req.body.project_name], [req.body.project_url], function(err,result){
// 		if(err) throw err;
// 		res.redirect("/");
// 	});

// });





app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
