import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRouter from "./routes/user_route.js";
import projectRouter from "./routes/project_route.js";
dotenv.config({});



const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsoption = {
    origin: 'http://localhost:5000',
    credentials: true,
};

app.use(cors(corsoption));

app.use("/api/v1/user",userRouter);
app.use("api/v1/project",projectRouter);

const PORT= process.env.PORT|| 4000;
app.listen(PORT,()=>{
    connectDB();
    console.log(`server running at port ${PORT}`)
})
