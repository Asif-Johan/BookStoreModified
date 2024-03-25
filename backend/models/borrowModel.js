import mongoose from "mongoose";


const borrowSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true,
    },
    studentId: {
        type: String,
        required: true,
    
    },
    studentMobile: {
        type: String,
        required: true,
    },
    studentEmail: {
        type: String,
        required: true,
    },
    bookId: {
        //bring book from bookSchema

type: mongoose.Schema.Types.ObjectId,
// type: String,
ref: "Book",
 // required: true,
    },

    bookName: {
        type: String,

    },
    requestedDays: {
        type: Number,
         required: true,
    
    },
})

export const Borrow = mongoose.model("Borrow", borrowSchema);