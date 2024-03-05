//express
import express from "express";
import { PORT } from "./config.js";

import mongoose from "mongoose";

import { MongoDBURL } from "./config.js";

//import books
import { Book } from "./models/bookModel.js";






const app = express();

//Middleware
app.use(express.json());


app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("hello world");
});

//Route to save a new book
app.post("/books", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear)
     {

        return res.status(400).send({ message: "All fields are required" });

    }

    const newBook = {
        title: req.body.title,
        author: req.body.author,
        publishYear: req.body.publishYear,
    };
const book = await Book.create(newBook);
return res.status(201).send(book);


  } catch (error) {
    //log error message
    console.log(error.message); //??

    res.status(500).send({ message: error.message });
    //?? return?
  }
});

app.listen(PORT, () => {
  console.log(`app is listning to ${PORT}`);
});


//get all books from db
app.get('/books', async (req, res) => {

    try {
        const books = await Book.find({});



        return res.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

mongoose
  .connect(MongoDBURL)
  .then(() => {
    console.log("connected to database");
  })
  .catch((error) => {
    console.log(error);
  });
