# Camp & Surf Lessons React App

A modern, responsive React web app showcasing a surf camp experience, including camp life gallery, surf lessons pricing, and testimonials with a clean, glassy design and smooth animations.

---

## Features

- **Hero Section**: Engaging landing area with a call to action  
- **Camp Life Gallery**: Image grid with reveal animations  
- **Surf Lessons Pricing**: Modern pricing cards with features and booking button  
- **Testimonials**: Glassy testimonial cards with user photos and quotes  
- Responsive design with Tailwind CSS  
- Smooth hover animations and transitions  

---

## Tech Stack

- React  
- Tailwind CSS  
- React hooks  
- Modern CSS animations and transitions  

---

## Getting Started

### Prerequisites

- Node.js (>=14.x recommended)  
- npm or yarn package manager  

### Installation

1. Clone the repo:

```bash
git clone https://github.com/yourusername/camp-surf-lessons-app.git
cd camp-surf-lessons-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```
3. Start the development server:

```bash
npm start
# or
yarn start
```

4. Open your browser and navigate to `http://localhost:3000` to view the app.

### Project structure
       
```
src/
│
├── components/
│   ├── atoms/          # Reusable small components (Button, Subtitle, Text, Image)
│   ├── molecules/      # Composite components (LessonsCard, Testimonials)
│   ├── organisms/      # Sections like Hero, CampLife, SurfLessons
│   └── pages/          # Page components
│
├── App.js              # Main app layout
├── index.js            # React entry point
└── App.css             # Global styles (Tailwind configured)
└── tailwind.config.js  # Tailwind CSS configuration
```

