const express =require("express");
const dotenv =require("dotenv").config();
const dbConnect =require("./config/dbConnect");
const authRoutes=require("./routes/authRoutes");
const userRoutes =require("./routes/userRoutes");
dbConnect();

const app=express();

// MIDDLEWARE ARE HERE
app.use(express.json());

//THE ROUTES 
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
//START THE SERVER
const PORT=process.env.PORT || 7002;
app.listen(PORT, ()=>{
    console.log(`Server is running at port ${PORT}`);
});