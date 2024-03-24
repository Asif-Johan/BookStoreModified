// Express
import express from "express";
import { PORT } from "./config.js";

import mongoose from "mongoose";

import { MongoDBURL } from "./config.js";

// Import books model and routes
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";



// Import CORS for cross-origin requests (if needed)
import cors from "cors";

const app = express();

// Middleware
app.use(express.json());

// Enable CORS (adjust origins as needed)
app.use(cors());; // Replace with frontend URL

// Routes
app.get("/", (req, res) => {
  console.log(req);
  return res.status(200).send("Hello world from backend!");
});

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
