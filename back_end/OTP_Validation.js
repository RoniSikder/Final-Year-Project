const nodemailer = require('nodemailer');

async function email_OTP(email){
  console.log(email);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'a3kr.projectmail@gmail.com',
      pass: 'ongwlgvexzpmqezr'
    }
  });
  const otp = Math.floor(1000 + Math.random() * 9000);
  const mailOptions = {
    from: 'a3kr.projectmail@gmail.com',
    to: email,
    subject: 'APP OTP',
    text: `Your OTP is ${otp}`
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
  return otp;
}
module.exports=email_OTP;