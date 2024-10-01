const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS   
    }
});

app.get("/", (req, res) => res.send("Express on Vercel"));

// API endpoint to handle sending emails
app.post('/api/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER, // sender address
        to: process.env.EMAIL_TO,   // list of receivers (this will be your email)
        subject: `${name} - ${email}`, // Subject line
        text: message                  // Plain text body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Failed to send email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
