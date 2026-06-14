# NayePankh Foundation Website

A complete NGO website with dark mode, animations, and donation system.

## Live Demo
https://nayepankh-frontend-and-webdev-task.onrender.com/

## Pages
- **Home** - Hero animation, impact stats, team section
- **About** - Timeline, mission, youth leadership
- **Donate** - Cause selection, amount presets, donation form

## Tech Stack
- HTML5
- Tailwind CSS
- Vanilla JavaScript
- Google Fonts
- Material Icons

## Features
- Dark mode with persistence
- Responsive design (mobile + desktop)
- Cinematic hero animation
- Scroll reveals
- Donation form ready
- 80G tax exemption info

## Project Structure
nayepankh-foundation/
├── index.html # Homepage
├── about.html # About Us
├── donate.html # Donation page
├── styles.css # Custom styles
├── script.js # Homepage JS
├── about.js # About page JS
├── donate.js # Donation JS
├── theme.js # Dark mode toggle
├── config.js # Tailwind config
└── images/ # Image assets

text

## Local Setup

1. Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/nayepankh-foundation.git
cd nayepankh-foundation
Start a local server

bash
# Using Python
python -m http.server 8000

# Or just open index.html in browser
View at http://localhost:8000

Deployment on Render
Push code to GitHub

Go to render.com

Create new Static Site

Connect your repository

Set publish directory to .

Click Deploy

Dark Mode
Toggle button in navbar

Saves preference to localStorage

Works across all pages

Respects system preference

Key Sections
Homepage
Preloader animation

Image grid scatter effect

About section

Impact stats cards

Join team CTA

Founder quote

About Page
Organization timeline (2020 to 2021)

Mission pillars (Food, Sanitary, Education, Clothing)

Impact numbers (200K+ lives, 15+ states, 500+ volunteers)

Youth-led section

Donate Page
Cause selection (Food, Education, Hygiene)

Amount presets (₹1K, ₹2.5K, ₹5K, ₹10K)

Donor information form

80G certification display

Monthly giving option

Customization
Change colors - Edit config.js

javascript
"primary": "#003f87",     // Main brand color
"warm-gold": "#E6AC00",   // Accent color
"deep-onyx": "#1A1A1A"    // Dark mode background
Update images - Replace URLs or add to images/ folder

Modify donation amounts - Edit buttons in donate.html

Browser Support
Chrome 90+

Firefox 88+

Safari 14+

Edge 90+

Future Improvements
Payment gateway integration

Volunteer registration form

Blog section

Email newsletter

Admin dashboard

Credits
Organization: NayePankh Foundation

Founder: Prashant Shukla

Purpose: Internship task submission

License
All rights reserved - NayePankh Foundation

Built as part of internship task
