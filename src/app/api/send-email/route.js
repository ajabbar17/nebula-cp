// app/api/send-email/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, email, phone, message } = await request.json();

  let transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., Gmail
    auth: {
      user: process.env.NODEMAILER_EMAIL, // your email address
      pass: process.env.NODEMAILER_PW, // your email password
    },
  });

  let mailOptions = {
    from: email,
    to: process.env.NODEMAILER_EMAIL, // your email address
    subject: `New Enquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  try {
     transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(' Error:', error.message);
        } else {
          console.log(' Email sent:', info.response);
        }
      })
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
  

    return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
  }
}
