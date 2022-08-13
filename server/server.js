const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')
const router = require('./routes/user-router');
const blogRouter = require('./routes/blog-router');
const port = 5000;
const multer = require('multer');
const app = express();

const db_url = `mongodb://admin:3ayuBLFluty8Ponp@cluster1-shard-00-00.ict4u.mongodb.net:27017,cluster1-shard-00-01.ict4u.mongodb.net:27017,cluster1-shard-00-02.ict4u.mongodb.net:27017/?ssl=true&replicaSet=atlas-arfjkl-shard-0&authSource=admin&retryWrites=true&w=majority`;

// midllewaires

app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
app.use(express.json());

app.use("/api/user", router);

app.use("/api/blog",  blogRouter)

// db config 
 mongoose.connect(db_url,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

// endpoints

app.get("/",  (req,res) => res.status(200).send("hello mern stack developer khadyja "));

// listen 
app.listen(port, console.log('your app listen now on', port));

