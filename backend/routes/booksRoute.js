
import express from 'express';
import { Book } from '../models/bookModel.js';


const router = express.Router();


//Route to save a new book
router.post("/", async (req, res) => {
    try {
      if (!req.body.title || !req.body.author || !req.body.pageNumber) {
        return res.status(400).send({ message: "All fields are required" });
      }
  
      const newBook = {
        title: req.body.title,
        author: req.body.author,
        pageNumber: req.body.pageNumber,
        isBorrowed: false,
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
  
  
  
  
  //get all books from db
  router.get("/", async (req, res) => {
    try {
      const books = await Book.find({});
  
      return res.status(200).json({
        count: books.length,
        data: books,
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });
  
  
  //get one book from db by id
  router.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const book = await Book.findById(id);
  
      return res.status(200).json(book);
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });
  
  //Route for updating a book
  router.put("/:id", async (req, res) => {
    try {
      if (!req.body.title || !req.body.author || !req.body.pageNumber) {
        return response.status(400).send({ message: "All fields are required" });
      }
  
      const { id } = req.params;
      const result = await Book.findByIdAndUpdate(id, req.body);
      if (!result) {
        return res.status(404).send({ message: "Book not found" });
      } else {
        return res.status(200).send({ message: "Book updated successfully" });
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });
  
  //delete a book from db
  router.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Book.findByIdAndDelete(id);
      if (!result) {
        return res.status(404).send({ message: "Book not found" });
      } else {
        return res.status(200).send({ message: "Book deleted successfully" });
      }
    } 
    
    catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  
  })
  
  export default router;