// express
const express=require('express');
const app=express();
const router=express.Router();
//body parse
const bodyParser=require('body-parser');

//Mongoose
const mongoose=require('mongoose');
var options={useMongoClient: true};
//config
const config=require('./config/database');
//path
const path=require('path');	

//authentication
const authentication=require('./routes/authentication')(router);

const port=process.env.PORT||8080;
mongoose.Promise=global.Promise;
mongoose.connect(config.uri,options,(err)=>{
	if(err) console.log(err);
	else{

		console.log("Connected to database");
	}
});
app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"client/dist")));
app.use('/authentication',authentication);
app.get('*',(req,res)=>{
	res.sendFile(path.join(__dirname,"client/dist/index.html"));
});
app.listen(port,(err)=>{
	if(err) console.log(err);
	else{
		console.log("Sever running on port :"+port);
	}
});