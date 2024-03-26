import nodemailer from "nodemailer";

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'library.isoruet.2024@gmail.com',
    pass: 'kyliqmypsafqdnfq'
  }
});

var mailOptions = {
  from: 'library.isoruet.2024@gmail.com',
  to: 'jjohan357@gmail.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});