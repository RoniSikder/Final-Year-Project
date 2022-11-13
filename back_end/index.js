const ex = require("express")
const mongo = require("mongoose");
const cors = require("cors");
const app = ex()
app.use(ex.json())
app.use(cors())
let port = 5700
let url = "mongodb+srv://ronisikder:87654321@a2kr-cluster.gl35rci.mongodb.net/Food-Ordering-System?retryWrites=true&w=majority"

mongo.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to the database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. n${err}`);
    })

let user = new mongo.Schema({
    email: String,
    pass: String,
    namea: String,
    contact:String,
    adde:String
})

let vold = new mongo.model("Vender", user)

app.post('/register', (req, res) => {
    const { email, pass, namea , contact , adde } = req.body
    vold.findOne({ email: email }, (alex, noex) => {
        if (noex) {
            res.send({ message: "User Already Exist" })
        }
        else {
            let noex = new vold({
                email,
                pass,
                namea,
                contact,
                adde
            })
            noex.save((err)=>{
                if(err){
                    res.send({message: "Error occurs"});
                }
                else{
                    res.send({ message: "Successfully Registered" })
                }
            })
                // .then(() => {
                //     res.send({ message: "Successfully Registered" })
                // })
                // .catch(() => {
                //     res.send(err)
                // })
        }
    })
})

app.post('/login', (req, res) => {
    const { email, pass } = req.body
    vold.findOne({ email: email }, (err, user) => {
        if (user) {
            if (pass === user.pass) {
                res.send({ message: "Log In Successfull", checker: user })
            }
            else {
                res.send({ message: "Fuck Off! Your not a Autherised User Dump Asshole!" })
            }
        }
        else {
            res.send({ message: "No User Exist! Please Sign Up First" })
        }
    })
})

app.get('/', (req, res) => {
    res.send("hello World");
})

app.listen(port, () => {
    console.log("Server is started at port " + port);
})