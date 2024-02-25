const express = require("express")
const cors = require("cors")
require("dotenv").config();
const url = process.env.url;
const connectDB = require("./db/connect")
const routes = require("./routes")

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)


app.get("/", (req, res) => {
    res.json({textMsg: "Welcome back"})
})



const start = async () =>{
    try {
        await connectDB(url)
        app.listen(3002, () => {
            console.log("Server is listening on port 3002")
        })
    } catch (error) {
        console.log(error)
    }
}

start()