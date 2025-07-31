// import mongoose from "mongoose";
// import initData from "./data.js";
// import Commerce from "../modal/emodal.js";
 

// main().
// then(()=>{
//     console.log("connection to db");
// }).catch((err)=>console.log(err));

// async function main(){
//     await mongoose.connect("mongodb://127.0.0.1:27017/commerce");
// };

// const initDB= async () =>{
//     await Commerce.deleteMany({});//jo phele se koi data ho usko delete karne ke liye
//      initData.data=initData.data.map((obj)=>({...obj}));
//     await Commerce.insertMany(initData.data);
//     console.log("data inserted");
//   };
//   initDB();
import mongoose from "mongoose";
import dotenv from "dotenv";
import initData from "./data.js";
import Commerce from "../modal/emodal.js";

dotenv.config(); // ✅ Load variables from .env

const initDB = async () => {
  try {
    await Commerce.deleteMany({});
    initData.data = initData.data.map((obj) => ({ ...obj }));
    await Commerce.insertMany(initData.data);
    console.log("Data inserted successfully.");
  } catch (err) {
    console.error("Error initializing DB:", err);
  }
};

const main = async () => {
  try {
    // ✅ Use connection string from .env
    await mongoose.connect(process.env.ATLAS_DB);
    console.log("Connected to MongoDB");

    await initDB();
    process.exit(); // Optional: exit after running
  } catch (err) {
    console.log("Error connecting to DB:", err);
  }
};

main();

