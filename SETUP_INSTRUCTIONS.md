# DriveFlow Dubai - Setup Instructions

## Email Address Updated ✅
Your email address `driveflowdubai@gmail.com` has been updated throughout the website.

## Setting Up Telegram Notifications

### Step 1: Create a Telegram Bot
1. Open Telegram and search for `@BotFather`
2. Send `/newbot` command
3. Follow the instructions to create your bot
4. Save the bot token (looks like: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`)

### Step 2: Get Your Telegram Chat ID
1. Send a message to your bot
2. Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
3. Find your chat ID in the response (looks like: `123456789`)

### Step 3: Configure Gmail App Password (for email notifications)
1. Go to your Google Account settings
2. Enable 2-factor authentication
3. Go to App Passwords
4. Generate a new app password for "Mail"
5. Save the 16-character password

### Step 4: Install Server Dependencies
```bash
# Install server dependencies
npm install express cors nodemailer axios nodemon

# Or copy the server-package.json and run:
cp server-package.json package.json
npm install
```

### Step 5: Configure the Server
1. Open `server.js`
2. Replace `YOUR_TELEGRAM_BOT_TOKEN` with your actual bot token
3. Replace `YOUR_TELEGRAM_CHAT_ID` with your actual chat ID
4. Replace `YOUR_APP_PASSWORD` with your Gmail app password

### Step 6: Start the Server
```bash
# Start the backend server
node server.js
# or for development with auto-restart:
npm run dev
```

### Step 7: Start the Frontend
```bash
# In a new terminal, start the React app
npm run dev
```

## How It Works

When someone submits an enquiry:
1. ✅ Form data is sent to your backend server
2. ✅ You receive a formatted message on Telegram with all details
3. ✅ You also receive an email notification (if configured)
4. ✅ Customer gets a confirmation message

## Telegram Message Format
```
🚗 New Car Rental Enquiry

👤 Name: John Doe
📱 Phone: +971 50 123 4567
📧 Email: john@example.com
🚙 Car: LAMBORGHINI HURACAN EVO SPYDER
📅 Pickup Date: 2024-01-15
📅 Return Date: 2024-01-20
💬 Message: Need GPS and child seat

⏰ Submitted at: 1/10/2024, 2:30:45 PM
```

## Troubleshooting

### If Telegram doesn't work:
- Check if bot token is correct
- Make sure you've sent at least one message to your bot
- Verify chat ID is correct

### If Email doesn't work:
- Make sure Gmail app password is correct
- Check if 2FA is enabled on Gmail
- Verify the email address is correct

### If Server doesn't start:
- Make sure port 3001 is available
- Check if all dependencies are installed
- Look at console for error messages

## Production Deployment

For production, you'll need to:
1. Deploy the server to a cloud service (Heroku, Vercel, etc.)
2. Update the API URL in `EnquiryDialog.jsx` to your production server
3. Set up environment variables for sensitive data
4. Configure a custom domain

## Support

If you need help setting this up, the system is designed to work even if Telegram/Email fails - customers will still get confirmation and you can check the server logs for enquiries.
