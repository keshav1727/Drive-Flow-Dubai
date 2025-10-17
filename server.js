const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Telegram Bot Configuration
const TELEGRAM_BOT_TOKEN = '8393769004:AAF-fvDJXA5aHlQXYFr-wQGXEnj2XNM91Y4';
const TELEGRAM_CHAT_ID = '5069494694'; // Your Telegram chat ID

// Email Configuration
const EMAIL_CONFIG = {
  service: 'gmail',
  auth: {
    user: 'driveflowdubai@gmail.com',
    pass: 'YOUR_APP_PASSWORD' // You need to generate an app password from Gmail
  }
};

// Create email transporter
const transporter = nodemailer.createTransport(EMAIL_CONFIG);

// Function to send message to Telegram
async function sendToTelegram(enquiryData) {
  try {
    const isBooking = enquiryData.type === 'booking';
    const emoji = isBooking ? '📋' : '🚗';
    const title = isBooking ? 'New Car Rental Booking Request' : 'New Car Rental Enquiry';
    
    let message = `
${emoji} *${title}*

👤 *Name:* ${enquiryData.name}
📱 *Phone:* ${enquiryData.phone || enquiryData.contact}
📧 *Email:* ${enquiryData.email || 'Not provided'}`;

    if (isBooking) {
      message += `
🚙 *Car:* ${enquiryData.vehicleType || 'Not specified'}
📅 *Pickup Date:* ${enquiryData.pickupDate}
⏰ *Pickup Time:* ${enquiryData.pickupTime || 'Not specified'}
📅 *Return Date:* ${enquiryData.returnDate}
⏰ *Return Time:* ${enquiryData.returnTime || 'Not specified'}`;

      if (enquiryData.message) {
        message += `
💬 *Message:* ${enquiryData.message}`;
      }
    } else {
      message += `
🚙 *Car:* ${enquiryData.carName}
📅 *Pickup Date:* ${enquiryData.pickupDate}
📅 *Return Date:* ${enquiryData.returnDate}
💬 *Message:* ${enquiryData.message || 'No additional message'}`;
    }

    message += `\n⏰ *Submitted at:* ${new Date().toLocaleString()}`;

    const response = await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: 'Markdown'
    });

    return response.data;
  } catch (error) {
    console.error('Telegram error:', error);
    throw error;
  }
}

// Function to send email notification
async function sendEmailNotification(enquiryData) {
  try {
    const isBooking = enquiryData.type === 'booking';
    const subject = isBooking 
      ? `New Car Rental Booking - ${enquiryData.vehicleType || 'Vehicle Request'}`
      : `New Car Rental Enquiry - ${enquiryData.carName}`;

    let html = `
      <h2>${isBooking ? 'New Car Rental Booking Request' : 'New Car Rental Enquiry'}</h2>
      <p><strong>Name:</strong> ${enquiryData.name}</p>
      <p><strong>Phone:</strong> ${enquiryData.phone || enquiryData.contact}</p>
      <p><strong>Email:</strong> ${enquiryData.email || 'Not provided'}</p>`;

    if (isBooking) {
      html += `
        <p><strong>Car:</strong> ${enquiryData.vehicleType || 'Not specified'}</p>
        <p><strong>Pickup Date:</strong> ${enquiryData.pickupDate}</p>
        <p><strong>Return Date:</strong> ${enquiryData.returnDate}</p>`;
    } else {
      html += `
        <p><strong>Car:</strong> ${enquiryData.carName}</p>
        <p><strong>Pickup Date:</strong> ${enquiryData.pickupDate}</p>
        <p><strong>Return Date:</strong> ${enquiryData.returnDate}</p>
        <p><strong>Message:</strong> ${enquiryData.message || 'No additional message'}</p>`;
    }

    html += `<p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>`;

    const mailOptions = {
      from: 'driveflowdubai@gmail.com',
      to: 'driveflowdubai@gmail.com',
      subject: subject,
      html: html
    };

    const result = await transporter.sendMail(mailOptions);
    return result;
  } catch (error) {
    console.error('Email error:', error);
    throw error;
  }
}

// API endpoint to handle enquiry submissions
app.post('/api/enquiry', async (req, res) => {
  try {
    const enquiryData = req.body;
    
    console.log('New enquiry received:', enquiryData);

    // Send to Telegram (if configured)
    if (TELEGRAM_BOT_TOKEN !== 'YOUR_TELEGRAM_BOT_TOKEN') {
      try {
        await sendToTelegram(enquiryData);
        console.log('Telegram notification sent successfully');
      } catch (telegramError) {
        console.error('Failed to send Telegram notification:', telegramError);
      }
    }

    // Send email notification (if configured)
    if (EMAIL_CONFIG.auth.pass !== 'YOUR_APP_PASSWORD') {
      try {
        await sendEmailNotification(enquiryData);
        console.log('Email notification sent successfully');
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError);
      }
    }

    res.json({ 
      success: true, 
      message: 'Enquiry submitted successfully! We will contact you soon.' 
    });

  } catch (error) {
    console.error('Error processing enquiry:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to submit enquiry. Please try again or call us directly.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'DriveFlow Dubai API is running' });
});

app.listen(PORT, () => {
  console.log(`🚗 DriveFlow Dubai API server running on port ${PORT}`);
  console.log(`📱 Telegram notifications: ${TELEGRAM_BOT_TOKEN !== 'YOUR_TELEGRAM_BOT_TOKEN' ? 'Enabled' : 'Disabled'}`);
  console.log(`📧 Email notifications: ${EMAIL_CONFIG.auth.pass !== 'YOUR_APP_PASSWORD' ? 'Enabled' : 'Disabled'}`);
});
