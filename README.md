# DriveFlow Dubai - Premium Car Rental

A modern, responsive car rental website built with React, Vite, and Tailwind CSS.

## 🚗 Features

- **Premium Dark Theme** - Modern cyberpunk-inspired design
- **Category-based Fleet** - Sports, SUV, Premium, and Budget categories
- **WhatsApp Integration** - Direct customer communication
- **Telegram Notifications** - Real-time enquiry notifications
- **Responsive Design** - Mobile-first approach
- **Quick Booking Form** - Streamlined rental process

## 📁 Project Structure

```
src/
├── components/
│   ├── forms/
│   │   ├── BookingForm.jsx      # Quick booking form
│   │   └── EnquiryDialog.jsx    # Car enquiry modal
│   └── layout/
│       ├── Header.jsx           # Navigation header
│       └── Footer.jsx           # Site footer
├── constants/
│   └── index.js                 # App constants (contact info, API endpoints)
├── data/
│   └── cars.js                  # Car data and categories
├── pages/
│   ├── Home.jsx                 # Landing page
│   └── Category.jsx             # Category-specific car listings
├── utils/
│   └── index.js                 # Utility functions
├── App.jsx                      # Main app component
├── main.jsx                     # App entry point
└── index.css                    # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Start backend server (for notifications):**
   ```bash
   node server.js
   ```

## 🎨 Design System

### Colors
- **Primary:** Cyan (#00D4FF)
- **Background:** Dark (#0a0a0a)
- **Text:** White with glow effects
- **Accent:** Blue gradients

### Components
- **Cards:** Glass-morphism with cyber glow effects
- **Buttons:** Gradient backgrounds with hover animations
- **Forms:** Dark theme with cyan focus states

## 📱 Features

### Fleet Management
- **41 Premium Vehicles** across categories
- **Sports Cars:** Ferrari, Lamborghini, Porsche, Aston Martin
- **SUVs:** Range Rover, BMW X6, Rolls Royce Cullinan
- **Dynamic Categories** with filtering

### Customer Communication
- **WhatsApp Integration** for instant enquiries
- **Telegram Notifications** for real-time updates
- **Email Support** with automated responses

### User Experience
- **Responsive Design** for all devices
- **Fast Loading** with optimized assets
- **Smooth Animations** and transitions
- **Accessibility** compliant

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

### API Endpoints
- **Enquiry API:** `http://localhost:3001/api/enquiry`
- **Telegram Integration:** Real-time notifications
- **Email Notifications:** Automated customer responses

## 📦 Dependencies

### Frontend
- React 18
- React Router DOM
- Lucide React (icons)
- Tailwind CSS
- Vite

### Backend
- Express.js
- CORS
- Nodemailer
- Axios

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

## 📞 Contact

- **Phone:** +971 55 802 9149
- **Email:** driveflowdubai@gmail.com
- **Location:** Downtown Dubai, UAE
- **Instagram:** @driveflowdubai

## 🎯 Business Features

- **Car Categories** with 41+ premium vehicles
- **WhatsApp Business** integration
- **Telegram Bot** for enquiries
- **Email Automation** for customer support
- **Responsive Booking** system
- **SEO Optimized** for search engines

---

Built with ❤️ for DriveFlow Dubai