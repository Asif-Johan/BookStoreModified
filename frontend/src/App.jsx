import React from 'react'
import {Routes, Route} from 'react'

//import from pages
import Home from './pages/home';
import createBooks from './pages/createBooks';
import deleteBooks from './pages/deleteBook';
import editBook from './pages/editBook';
import showBook from './pages/showBook';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/books/create' element={<createBooks></createBooks>}/>
      <Route path='/books/details/:id' element={<showBook></showBook>}/>
      <Route path='/book/edit/:id' element={<editBook></editBook>}/>
      <Route path='/book/delete/:id' element={<deleteBooks></deleteBooks>}/>
    </Routes>
  )
}

export default App
