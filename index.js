const express = require("express")
const cors=require("cors")
const app=express()
app.use(express.json()) 
app.use(express.urlencoded({extended: true}));
const mongoose=require("mongoose")
var bodyParser=require("body-parser")
const morgan=require("morgan")
const dotenv=require("dotenv")
const nodemon=require("nodemon")

const authorRoute=require("./routes/author")
const bookRoute=require("./routes/book")

dotenv.config();
// mongoose.connect((process.env.MONGODB_URL),() => {
//         console.log("connect successful")
//     })
 mongoose.connect(
    "mongodb+srv://trunganhxxiii:123456ta@cluster0.yk9vsjv.mongodb.net/?retryWrites=true&w=majority",
    (err) => {
        if (err)
            console.log(err)

        else
            console.log("mongdb is connected")
    }
  );
  
app.use(bodyParser.json({limit:"50mb"}))
app.use(cors())
app.use(morgan("common"))


app.use("/v2/author",authorRoute)
app.use("/v1/book",bookRoute)

app.listen(8000,()=>
{
    console.log("server is running...")
})
