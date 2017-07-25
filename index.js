// express
const express=require('express');
const app=express();
//Mongoose
const mongoose=require('mongoose');
//config
const config=require('./config/database');
//path
const path=require('path');	
mongoose.Promise=global.Promise;
mongoose.connect(config.uri,(err)=>{
	if(err) console.log(err);
	else{

		console.log("Connected to database");
	}
});
app.use(express.static(path.join(__dirname,"client/dist")));
app.get('*',(req,res)=>{
	res.sendFile(path.join(__dirname,"client/dist/index.html"));
});
app.listen(8080,(err)=>{
	if(err) console.log(err);
	else{
		console.log("Sever running on port");
	}
});