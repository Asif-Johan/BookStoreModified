// import React, { useState, useEffect } from 'react';

// import axios from 'axios';

// import Spinner from '../components/spinner';

// import { Link } from 'react-router-dom';

// import { AiOutlineEdit } from 'react-icons/ai';
// import { BsInfoCircle } from 'react-icons/bs';
// import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';



// const Home = () => {
// const [books, setBooks] = useState([

// ]);

// const [loading, setLoading] = useState(false);

// useEffect(()=>{
// setLoading(true);
// axios.get('http://localhost:5173/books').then((response)=>{
// setBooks(response.data.data);
// setLoading(false);
// }).catch((error)=>{
//     console.log(error);
//     setLoading(false);
// });


// }, [])




//   return (
//     <div className='p-4'>
//       <div className='flex
//        justify-between items-center'>
//         <h1 className='my-8 text-3xl'>Books List</h1>




//         <Link to='/books/create'>
//             <MdOutlineAddBox className='text-red-400 text-4xl'></MdOutlineAddBox>
//         </Link>
//        </div>


// {loading? (<Spinner/>) : ( 



//     <table className='w-full border-separate border-spacing-2'>
// <thead>
//     <tr>
//          <th>No</th>
//         <th>Title</th>
//         <th className='max-md:hidden'>Author</th>
//         <th className='max-md:hidden'>Publish Year</th>
//         <th> Operations </th>  
//     </tr>
// </thead>


// <tbody>
// {books?.map((book, index)=>{
// <tr key={book._id} className='h-8'>
//     <td>{index+1}</td>
//     <td>{book.title}</td>
//     <td className='max-md:hidden'>{book.author}</td>
//     {/* <td>{book.title}</td> */}
//     <td className='max-md:hidden'>{book.publishYear}</td>
//     <td >
//         <Link to={`/books/details/${book._id}`}>
//             <BsInfoCircle className='text-blue-400 text-2xl'></BsInfoCircle>
//         </Link>
//         <Link to={`/books/edit/${book._id}`}>
//             <AiOutlineEdit className='text-green-400 text-2xl'></AiOutlineEdit>
//         </Link>
//         <Link to={`/books/delete/${book._id}`}>
//             <MdOutlineDelete className='text-red-400 text-2xl'></MdOutlineDelete>
//         </Link> 
//     </td>
// </tr>
// })}
// </tbody>
//     </table>
// )

// }

//     </div>
//   )
// }

// export default Home





import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get('http://localhost:5555/books'); // Replace with your backend URL
        setBooks(response.data.data); // Assuming data is nested within "data" property
      } catch (err) {
        console.error(err);
        setError(err.message || 'Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <h1>Books</h1>
      {loading && <p>Loading books...</p>}
      {error && <p>Error: {error}</p>}
      {books.length > 0 && (
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-2 py-1">No.</th>
              <th className="px-2 py-1">Title</th>
              <th className="px-2 py-1">Author</th>
              <th className="px-2 py-1">Publish Year</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id} className="h-8 border border-gray-200">
                <td className="px-2 py-1">{index + 1}</td>
                <td className="px-2 py-1">{book.title}</td>
                <td className="px-2 py-1">{book.author}</td>
                <td className="px-2 py-1">{book.publishYear}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {books.length === 0 && !loading && <p>No books found.</p>}
    </div>
  );
};

export default Home;