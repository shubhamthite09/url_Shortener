require("dotenv").config();
const express = require("express");
const {urlRouter} = require("./routes/urlRouter")
const {userRouter} = require("./routes/userRouter")

const cors = require("cors");
const {connection} = require("./config/db")
const cookieParser = require('cookie-parser')
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser())

//routes
app.use("/user",userRouter);
app.use("/url",urlRouter);

app.get("/",(req,res)=>{
    res.status(201).send({isError:false,Msg:'welcome to server'})
})

const PORT = process.env.PORT || 7890
app.listen(PORT,async()=>{
    try{
        await connection;
        console.log("connected to MongoDB");
    }catch(err){
        console.log(err);
    }
    console.log("listing to PORT",PORT);
})