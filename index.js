import express from 'express';
import bodyParser from 'body-parser';
//import ejs from 'ejs';
import mongoose from 'mongoose';
import routes from './src/routes/mandiRoutes.js'


const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mandiDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static('public'));

routes(app);

app.get('/', function(req, res){
    res.send("Hello World!");
})


app.listen(3000, function(){
    console.log("Server started on port 3000");
})