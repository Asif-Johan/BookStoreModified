// //express
// import express, { response } from "express";
// import { PORT } from "./config.js";

// import mongoose from "mongoose";

// import { MongoDBURL } from "./config.js";

// //import books
// import { Book } from "./models/bookModel.js";
// //import bookRoute
// import booksRoute from './routes/booksRoute.js'

// //import cors
// import cors from 'cors'



// const app = express();

// //Middleware
// app.use(express.json());

// //use cors
// app.use(cors());


// app.get("/", (req, res) => {
//   console.log(req);
//   return res.status(234).send("hello world");
// });


// app.use('/books' ,booksRoute);



// //Route to save a new book
// app.post("/books", async (req, res) => {
//   try {
//     if (!req.body.title || !req.body.author || !req.body.publishYear) {
//       return res.status(400).send({ message: "All fields are required" });
//     }

//     const newBook = {
//       title: req.body.title,
//       author: req.body.author,
//       publishYear: req.body.publishYear,
//     };
//     const book = await Book.create(newBook);
//     return res.status(201).send(book);
//   } catch (error) {
//     //log error message
//     console.log(error.message); //??

//     res.status(500).send({ message: error.message });
//     //?? return?
//   }
// });



// //get all books from db
// app.get("/books", async (req, res) => {
//   try {
//     const books = await Book.find({});

//     return res.status(200).json({
//       count: books.length,
//       data: books,
//     });
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send({ message: error.message });
//   }
// });

// //get one book from db by id
// app.get("/books/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const book = await Book.findById(id);

//     return res.status(200).json(book);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send({ message: error.message });
//   }
// });

// //Route for updating a book
// app.put("/books/:id", async (req, res) => {
//   try {
//     if (!req.body.title || !req.body.author || !req.body.publishYear) {
//       return response.status(400).send({ message: "All fields are required" });
//     }

//     const { id } = req.params;
//     const result = await Book.findByIdAndUpdate(id, req.body);
//     if (!result) {
//       return res.status(404).send({ message: "Book not found" });
//     } else {
//       return res.status(200).send({ message: "Book updated successfully" });
//     }
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send({ message: error.message });
//   }
// });

// //delete a book from db
// app.delete("/books/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const result = await Book.findByIdAndDelete(id);
//     if (!result) {
//       return res.status(404).send({ message: "Book not found" });
//     } else {
//       return res.status(200).send({ message: "Book deleted successfully" });
//     }
//   } 
  
//   catch (error) {
//     console.log(error.message);
//     res.status(500).send({ message: error.message });
//   }

// })




// mongoose
//   .connect(MongoDBURL)
//   .then(() => {
//     console.log("connected to database");
//     app.listen(PORT, () => {
//       console.log(`app is listning to ${PORT}`);
//     });
    
//   })
//   .catch((error) => {
//     console.log(error);
//   });





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
