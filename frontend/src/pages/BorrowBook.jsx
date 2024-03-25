import React, { useState } from 'react'
//bring axios
import axios from 'axios';



const BorrowBook = () => {
const [borrow, setBorrow] = useState(null);
const [createForm, setCreateForm] = useState({
    bookName:"",
    studentName:"",
    studentId:"",
    studentMobile:"",
    studentEmail:"",
    requestedDays:0,
    
})


  //functions
const handleChange = (e) => {
    const {name, value} = e.target;
    setCreateForm({...createForm, [name]:value});
}

//submit function
  const handleFormSubmit = (e)=>{
    e.preventDefault();
    console.log("form submit req hit");

    const res = axios.post('http://localhost:5555/borrow', createForm);


console.log(res);
  }




  return (
    <div>
      <div className='container mx-auto max-w-90vw sm:max-w-80vw md:max-w-lg lg:max-w-lg'>
      <h1 className='text-3xl font-semibold text-center my-5'>Borrow Book Request</h1>
      
      <form onSubmit={handleFormSubmit} className='flex flex-col gap-6 mb-60'>

<div>
<label htmlFor="bookName" className='text-lg block'>Book Name</label>
<input type="text" name='bookName' 
value={createForm.bookName} onChange={handleChange}

className='block border border-slate-300 rounded-md p-1 mt-2 w-full'/>
</div>

<div>
<label htmlFor="studentName" className='block'>Student Name</label>
<input type="text" name='studentName'
value={createForm.studentName} onChange={handleChange}
className='block border border-slate-300 rounded-md p-1 mt-2 w-full'/>
</div>


<div>
<label htmlFor="studentId"className='block'>Student Id</label>
<input type="text" name='studentId' 
value={createForm.studentId} onChange={handleChange}
className='block border border-slate-300 rounded-md p-1 mt-2 w-full'/>
</div>


<div>
<label htmlFor="studentMobile" className='block'>Contact Number</label>
<input type="text" name='studentMobile'
value={createForm.studentMobile} onChange={handleChange}
className='block border border-slate-300 rounded-md p-1 mt-2 w-full'/>
</div>

<div>
<label htmlFor="studentEmail"className='block'>Email</label>
<input type="email" name='studentEmail'
value={createForm.studentEmail} onChange={handleChange}
className='block border border-slate-300 rounded-md p-1 mt-2 w-full'/>
</div>




<div>
<label htmlFor="requestedDays" className='block'>Requested Days</label>
<input type="number" name='requestedDays'
value={createForm.requestedDays} onChange={handleChange}
className='block border border-slate-300 rounded-md p-1 mt-2 w-full'/>
</div>




<button type='submit' className='py-1 px-3 bg-green-700 shadow-2xl text-white rounded-md font-semibold text-md w-44'>Request To Borrow</button>
      </form>
      </div>

    </div>
  )
}

export default BorrowBook
