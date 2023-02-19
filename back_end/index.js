const ex = require("express")
const mongo = require("mongoose");
const cors = require("cors");
const app = ex();
const vender_otp = require("./OTP_Validation");
app.use(ex.json())
app.use(cors())
let port = 5700
let url = "mongodb+srv://ronisikder:87654321@a2kr-cluster.gl35rci.mongodb.net/Food-Ordering-System?retryWrites=true&w=majority"

mongo.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to the database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database ${err}`);
    })


let foodItem = new mongo.Schema({
    food_name: String,
    food_des: String,
    food_price: String,
    food_rating: String
})

let user = new mongo.Schema({
    email: String,
    pass: String,
    namea: String,
    food_manu: [foodItem],
    contact: String,
    vender_address: String
})

let vold = new mongo.model("Vender", user)

let otpa = 0;
app.post('/login', (req, res) => {
    const { email , pass } = req.body;
    console.log("l")
    console.log(email)
    otpa = vender_otp(email);
})

app.post('/register', (req, res) => {
    console.log("r")
    const { email, pass, namea, contact, adde } = req.body;
    otpa = vender_otp(email);
})

app.post('/register/otp_validation', (req, res) => {
    const { email, pass, namea, contact, vender_address, otp } = req.body
    console.log("ro")
    if (otp === otp) {
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
                    vender_address
                })
                noex.save((err) => {
                    if (err) {
                        res.send({ message: "Error occurs" });
                    }
                    else {
                        res.send({ message: "Successfully Registered", code: noex._id })
                    }
                })
            }
        })
    }
})

app.post('/login/otp_validation', (req, res) => {
    console.log("lo")
    console.log(otpa);
    const { email, pass, otp } = req.body
    if (otp === otp) {
        console.log("pass");
        vold.findOne({ email: email })
            .then((user) => {
                if (user) {
                    if (pass === user.pass) {
                        res.send({ message: "Log In Successfull", code: user._id, username: user.namea })
                    }
                    else {
                        res.send({ message: "Fuck Off! Your not a Autherised User Dump Asshole!" })
                    }
                }
            })
            .catch((err) => {
                res.send({ message: "No User Exist! Please Sign Up First" })
            })
    }
})

app.post('/addvenderManu/:id', (req, res) => {
    const { food_name, food_des, food_price } = req.body

    vold.findByIdAndUpdate(req.params.id, {
        $push: {
            food_manu: {
                food_name: food_name,
                food_des: food_des,
                food_price: food_price
            }
        }
    }, (err, resa) => {
        if (err) {
            res.send({ message: "sorry please try again later" })
        }
        else {
            res.send({ message: "updated" })
        }
    })
})

app.get('/', (req, res) => {
    res.send("hello World");
})

app.listen(port, () => {
    console.log("Server is started at port " + port);
})