import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/home.jsx';
import CreateBook from './pages/CreateBook.jsx';
import EditBook from './pages/editBook.jsx';
import DeleteBook from './pages/deleteBook.jsx';
import ShowBook from './pages/showBook.jsx';



const App = () => {
  return (
    <>
    <div className='flex justify-center align-top bg-red-400 py-2 text-rose-50'>Hi Just checking</div>


    
   <Routes>
    <Route path='/' element= {<Home/>} />
    <Route path='/books/create' element= {<CreateBook/>} />
    <Route path='/books/edit/:id' element= {<EditBook></EditBook>} />
    <Route path='/books/details/:id' element= {<ShowBook></ShowBook>} />
    <Route path='/books/delete/:id' element= {<DeleteBook/>} />
   </Routes>

   </>
  )
}

export default App
