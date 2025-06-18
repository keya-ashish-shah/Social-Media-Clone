// const express=require("express");
// const mongoose=require("mongoose");
// const dotenv=require("dotenv");
// const helmet=require("helmet");
// const morgan=require("morgan");
// const userRoute=require("./routes/users");
// const app =express();
// dotenv.config();





// mongoose.connect(process.env.MONGO_URL,{useNewURLParser:true,useUnifiedTopology:true})



// // if(mongoose.connect()){
// //     console.log("connected to the mongo db");
// // }



// // app.get("/",(req,res)=>{
// //     res.send("welcome to the home page");
// // });

// // middleware used below
// app.use(express.json());
// app.use(helmet());
// app.use(morgan("common"));
// app.use("/api/users",userRoute);



// app.listen(8800,()=>{
//     console.log("backend server is running");
// })


const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {useNewURLParser: true, useUnifiedTopology: true});

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(8800, ()=>{
    console.log("Backend server is running!");
});