import axios from 'axios';
import React, { useState } from 'react'
import {FaEnvelope, FaEdit, FaPhone, FaBook, FaClock, FaIdBadge} from 'react-icons/fa'

const BorrowCard = (props) => {
  const [createEmail, setCreateEmail] =useState({
name : props.studentName,
studentId : props.studentId,
email : props.studentEmail,
mobile : props.studentMobile,
reqDays :props.requestedDays,
approveStatus : true,

  })


const sendEmail=(e)=>{
  console.log("sendEmailHit", e.target.value);
setCreateEmail({...createEmail, approveStatus: e.target.value}) 

  axios.post("http://localhost:5555/nodemailer", createEmail).then(
    (res)=>{
      console.log("Email Sent from frontend", res);
      console.log(createEmail);
    }
  ).catch(
    (err)=>{
      console.log(err);
    }
  )

}

  return (
    <div>
      <div className='card border border-green-600 rounded-3xl flex flex-col gap-3 px-10 py-5'>
        <h1 className='text-2xl font-semibold flex gap-1'><FaBook className='mt-2'/>: {props.bookName}</h1>
        <div className='flex flex-col gap-2'>
            <p className='flex gap-1'><FaEdit className='mt-2'/>: {props.studentName}</p>
            <p className='flex gap-1'><FaIdBadge className='mt-2'/>: {props.studentId}</p>
            <p className='flex gap-1'><FaEnvelope className='mt-2'/>: {props.studentEmail}</p>
            <p className='flex gap-1'><FaPhone className='mt-2'/>: {props.studentMobile}</p>
            <p className='flex gap-1'><FaClock className='mt-2'/>: {props.requestedDays+" Days"}</p>
        </div>
        <div className='flex justify-between pt-4 pb-3 '>
          <button onClick={sendEmail} value={true} className='bg-green-400 rounded-md hover:rotate-3 px-3'>Accept</button>
          <button onClick={sendEmail} value={false}  className='bg-red-400 rounded-md hover:rotate-3 px-3'>Reject</button>
        </div>

      </div>
    </div>
  )
}

export default BorrowCard
