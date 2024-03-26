import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import axios from "axios";
import BorrowCard from "../components/BorrowCard";

const AdminShowBorrowRequest = () => {
  const [matchedRequests, setMatchedRequests] = useState([]);

  //useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const borrowRes = await axios.get("http://localhost:5555/246admin/borrow/requests");
        const bookRes = await axios.get("http://localhost:5555/books");

        const borrowRequests = borrowRes.data.data;
        const books = bookRes.data.data;
        console.log("Books", books);
        console.log("BorrowReq", borrowRequests);
        


        const matched = borrowRequests.filter((request)=>
        books.some((book)=>book._id===request.bookId)
        );
        
        const mathcedWithNames = matched.map((request)=>{
          const matchedBook = books.find(book=> book._id === request.bookId);
          const nameOfBook = matchedBook? matchedBook.title:"Unknown";
          return {...request,nameOfBook}
        })
        setMatchedRequests(mathcedWithNames);
        
      }
        
        catch (err) {
          console.error(err);
        }

    };
    fetchData();

  }, []);

    console.log("\n mathcedRequests outside fetch", matchedRequests);


  return (
    <div className="">
      <BackButton />
      <h1 className="text-center text-3xl font-semibold text-green-600 mb-5">
        All Borrow Requests
      </h1>

      <div className="text-center">
        {matchedRequests.length === 0
          ? "No Books To Show. Can be a server Error"
          : ""}
      </div>

      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
      max-w-[90vw] mx-auto lg:max-w-[80vw]">

{matchedRequests.map((matchedRequest , index) => (
        <div className="mx-1 my-1">
          <BorrowCard
            key={index}
            bookName={matchedRequest.nameOfBook}
            studentName={matchedRequest.studentName}
            studentId={matchedRequest.studentId}
            studentEmail={matchedRequest.studentEmail}
            studentMobile={matchedRequest.studentMobile}
            requestedDays={matchedRequest.requestedDays}
          />
        </div>
))}


      </div>





    </div>
  );
};

export default AdminShowBorrowRequest;
