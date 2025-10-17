# DriveFlow Dubai - Car Rental Website

A modern, responsive car rental website for DriveFlow Dubai built with React and Tailwind CSS.

## Features

- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Modern UI**: Clean, professional design with Dubai-themed colors
- **Booking System**: Complete booking flow from initial inquiry to final confirmation
- **Contact Integration**: Seamless transition from booking form to contact page
- **Premium Fleet Showcase**: Display of luxury and economy vehicles
- **Service Information**: Comprehensive information about car rental services

## Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd driveflow-dubai
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── Footer.jsx          # Footer component
│   └── BookingForm.jsx     # Quick booking form
├── pages/
│   ├── Home.jsx            # Landing page
│   └── Contact.jsx         # Contact/booking details page
├── App.jsx                 # Main app component
├── main.jsx               # Entry point
└── index.css              # Global styles
```

## Features Overview

### Home Page
- Hero section with quick booking form
- Services showcase
- Premium fleet display
- Why choose us section
- About section with contact information

### Booking Flow
1. **Quick Booking Form**: Collects basic information (name, contact, email, dates, vehicle type)
2. **Contact Page**: Detailed booking form with additional requirements
3. **Confirmation**: Success page with next steps

### Responsive Design
- Mobile-first approach
- Sticky navigation
- Collapsible mobile menu
- Optimized forms for all screen sizes

## Customization

### Colors
The website uses a Dubai-themed color palette defined in `tailwind.config.js`:
- Dubai Gold: #FFD700
- Dubai Blue: #0066CC
- Dubai Sand: #F4E4BC
- Dubai Red: #CC0000

### Content
Update the following files to customize content:
- `src/pages/Home.jsx` - Main page content
- `src/components/Header.jsx` - Navigation and contact info
- `src/components/Footer.jsx` - Footer content and links

## Deployment

The website can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## Contact Information

- **Phone**: +971 50 123 4567
- **Email**: info@driveflowdubai.com
- **Location**: Downtown Dubai, UAE
- **Website**: driveflowdubai.com

## License

This project is proprietary to DriveFlow Dubai.
# Drive-Flow-Dubai
