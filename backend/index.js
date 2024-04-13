// Express
//testing update
import express from "express";
import { PORT } from "./config.js";

import mongoose from "mongoose";

import { MongoDBURL } from "./config.js";
import dotenv from "dotenv";

// Import books model and routes
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import {Borrow} from "./models/borrowModel.js"


// Import CORS for cross-origin requests (if needed)
import cors from "cors";
import nodeMailer from "./routes/emailRoute.js";

const app = express();

// Middleware
app.use(express.json());

// Enable CORS (adjust origins as needed)
app.use(cors());; // Replace with frontend URL
dotenv.config();
console.log("Entry through index");
// console.log("Admin:" , process.env.AdminEmail, process.env.AdminPass);

// //Middleware
// const auth = (req,res,next) =>{
//   const Email = req.query.Email;
//   const Password = req.query.Password;
//   console.log("Request:",Email, Password, "Admin:", process.env.AdminEmail, process.env.AdminPass);

//   if (process.env.AdminEmail === Email && process.env.AdminPass === Password){
//     next();
//   }else{
//     res.status(401).send(false);
//     console.log("Unauthorized");s
//     return;
  
//   }
// }



// // Routes for login
// app.get("/confirmAdmin", auth, ( req, res) => {
//   console.log("Recieved get req", req, res);
//   return res.status(200).send(true);
// });


const auth = (req, res, next) => {
  // console.log("Hi", req.query.isAdmin);
    next(); 
};



app.post("/nodemailer", nodeMailer)


//Post Borrow Req route
//post
app.post("/borrow", async(req,res)=>{
  
    const studentName =req.body.studentName;
    const studentId =req.body.studentId;
    const studentMobile = req.body.studentMobile;
    const studentEmail = req.body.studentEmail;
    const bookId =req.body.bookId;
    
    const requestedDays =req.body.requestedDays;

    //create in Db
    const borrow = await Borrow.create({

      studentName: studentName,
      studentId: studentId,
      studentMobile: studentMobile,
      studentEmail: studentEmail,
      bookId: bookId,
      
      requestedDays: requestedDays,
    });

    res.json({borrow: borrow});
});

//fetch all borrow reqs
app.get("/246admin/borrow/requests",auth, async(req,res)=>{
  try {
    const borrows = await Borrow.find({});

    return res.status(200).json({
      count: borrows.length,
      data: borrows,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
})
 //delete a borrow req from db
 app.delete("/admin/borrow/request/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Borrow.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).send({ message: "Borrow Req not found" });
    } else {
      return res.status(200).send({ message: "Borrow Req deleted successfully" });
    }
  }
  
  catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }

})







// Use the book routes defined in booksRoute.js
app.use("/books", booksRoute);

//use the borrow routes defined in borrowRoute.js


// Connect to MongoDB
mongoose
  .connect(MongoDBURL)
  .then(() => {
    console.log("Connected to database");
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
    process.exit(1); // Exit process on error
  });
