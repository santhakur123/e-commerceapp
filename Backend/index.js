// import express from "express";
// import mongoose from "mongoose";
// import commerceRoute from "./route/commerce.js"
// import dotenv from "dotenv";
// import cors from "cors";
// import usersignupRoute from "./route/userroute.js";
// import reviewRoute from "./route/reviewroute.js";

// dotenv.config(); 

// const app=express();
// const dbURL=process.env.ATLAS_DB;
// app.use(cors());
// app.use(express.json());



// main().then(()=>{
//     console.log("connection to db");
// }).catch((err)=>console.log(err));

// async function main(){
//     await mongoose.connect(dbURL);
// }
// ///defining routes
//  app.use("/commerce",commerceRoute);
//  app.use("/user",usersignupRoute);
//  app.use("/commerce/:id/reviews",reviewRoute);

//  app.get("/",(req,res)=>{
//     res.send("working   condition");
//  })
// app.listen(3000,()=>{
//     console.log(`a good server  on port ${3000}`)
// });
// // app.post("/test",(req,res)=>{
// //     console.log("Request Body",req.body);
// //     res.status(200).json({message:"received successfully"})
// // });
// // app.listen(5000,()=>{
// //     console.log("server is running 0n 5000");
// // })
import express from "express";
import mongoose from "mongoose";
import commerceRoute from "./route/commerce.js";
import usersignupRoute from "./route/userroute.js";
import reviewRoute from "./route/reviewroute.js";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env variables
dotenv.config();

const app = express();
const dbURL = process.env.ATLAS_DB;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// API routes
app.use("/commerce", commerceRoute);
app.use("/user", usersignupRoute);
app.use("/commerce/:id/reviews", reviewRoute);

// Serve frontend in production
app.use(express.static(path.join(__dirname, "client", "dist")));

app.get("*", (req, res) => {
  // Don't interfere with API routes
  if (
    req.path.startsWith("/commerce") ||
    req.path.startsWith("/user") ||
    req.path.includes("/reviews")
  ) {
    return res.status(404).send("API route not found");
  }
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
