const express = require("express") // THIS IS NEEDED FOR ALL OF ROUTES
const mongoose = require("mongoose") // THIS IS FOR DATABASE
const bodyParser = require("body-parser")

//  create our express app
const app = express()

//  If using .fetch not axios
//  Handle CORS + middleware
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "auth-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
})

//  database stuffs
const uri = "mongodb+srv://ganielle:Yukie2125@mevntutorial.7vrjm11.mongodb.net/MEVNTutorial"
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//  .then .catch (try catch sa c#)
.then(() => {
    console.log("MongoDB Connected")
})
.catch(err => console.log(err))

app.use(bodyParser.json())

//  routes
app.get("/", (req, res) => {
    res.send("yay homepage")
})

const TodosRoute = require('./Routes/Todos')
app.use('/todos', TodosRoute)

//  Start server
app.listen(3000, () => {
    console.log("Listening at port 3000")
})