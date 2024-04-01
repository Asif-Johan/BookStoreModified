import nodemailer from "nodemailer";

const nodeMailer = async (req,res) =>{

const name = req.body[0];
const bookTitle = req.body[1]? req.body[1]:"No Title Mentioned";
const studentId = req.body[2];
const email = req.body[3];
const mobile = req.body[4];
const reqDays = req.body[5];
const approveStatus = req.body[6];


// console.log(req.body ,name, bookTitle, studentId, email, mobile, reqDays, approveStatus);

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'library.isoruet.2024@gmail.com',
    pass: 'kyliqmypsafqdnfq'
  }
});

var mailOptions = {
  from: 'library.isoruet.2024@gmail.com',
  to: `library.isoruet.2024@gmail.com`,
  //to:`${email}`
  subject: `Your Request to borrow book has been ${approveStatus?`Accepted`:`Rejected`}`,
  html: `
  
  <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Book Borrowing Request</title>
<style>
  body {
    font-family: Arial, sans-serif;
  }
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .header {
    text-align: center;
    margin-bottom: 20px;
  }
  .message {
    margin-bottom: 20px;
  }
  .footer {
    text-align: center;
    color: #888;
  }
</style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Book Borrowing Request</h1>
    </div>
    <div class="message">
      <p>As salamu alaikum,</p>
      <p>Dear ${name}, ${studentId}</p>
      <p>Email ${email}</p>
      
      <p>Your request to borrow a book has been 
      ${approveStatus ? 'Accepted' : 'Rejected'}.</p>
      <p>Book Title: ${bookTitle}</p>
      <p>Request Date: ${reqDays}</p>
      <p>If you have any questions, please contact us.</p>

    </div>
    <div class="footer">
      <p>Thank you,</p>
      <p>The Library Team</p>
    </div>
  </div>
</body>
</html>

  
  `
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
    res.send("Email sent");
  }
});

}


export default nodeMailer;