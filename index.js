const express = require('express');
const app = express();
const cors = require('cors');

const path = require('path')
require('dotenv').config();

const mongoose = require("mongoose");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,"public")));
app.use(cors());

const PORT = process.env.PORT;

//const Mongo_URL = "mongodb://127.0.0.1:27017/instaDb";
async function main(){
    await mongoose.connect(process.env.MONGODB_URI);
}
main().then(()=>{
    console.log("connect to Db");
}).catch(err => {
    console.log(err);
});
//mongoose.connect(Mongo_URL);
require('./models/users');
require('./models/post');

app.use(express.json())
app.use(require('./routes/register'));
app.use(require('./routes/posts'));


app.listen(PORT, () => {
    console.log(`app is listening to ${PORT}`);
});