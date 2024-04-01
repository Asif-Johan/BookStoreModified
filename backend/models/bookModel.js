import mongoose from "mongoose";

const bookSchema = mongoose.Schema({

    title: {
        type: String,
        required: true,
    }, 
    author: {
        type: String,
        required: true,
    },
    pageNumber: {
        type: Number,
        required: true,
    },
    isBorrowed: {
        type: Boolean,
        default: false,
    }
},
{
    timestamps: true,
}


);

export const Book = mongoose.model("Cat", bookSchema);
