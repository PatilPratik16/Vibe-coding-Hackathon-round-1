# HackFest 2024 - Frontend Development Hackathon Website

A modern, responsive website built for a frontend development hackathon competition. This project showcases advanced web development techniques including dark/light mode theming, smooth animations, and parallax transitions.

## 🚀 Live Demo

**[View Live Website](https://v0-frontend-hackathon-website.vercel.app/)**

## 📋 Project Overview

This website was created to meet the mandatory requirements for a frontend hackathon submission, featuring:

- **Fully Responsive Design** - Works perfectly on all devices and screen sizes
- **Dark/Light Mode Toggle** - Seamless theme switching with smooth transitions
- **Custom Animated Loader** - Engaging loading experience with progress indicator
- **Parallax Page Transitions** - Unique left/right split animation between sections
- **Interactive Navigation** - Smooth scrolling with active section highlighting
- **Modern UI Components** - Built with shadcn/ui and Tailwind CSS

## ✨ Features

### Mandatory Requirements ✅
1. **Responsiveness** - Mobile-first design with breakpoint optimization
2. **6+ Features Implemented**:
   - Responsive navigation with mobile menu
   - Dark/Light mode toggle system
   - Smooth scrolling navigation
   - Animated loading screen
   - Parallax section transitions
   - Interactive cards and components
   - Form validation (contact form)
   - Scroll-triggered animations
3. **Light and Dark Mode** - Complete theming system
4. **Custom Loader** - Animated progress loader
5. **Proper Navigation** - All sections properly linked

### Additional Features 🎯
- **GSAP Animations** - Smooth scroll-triggered animations
- **Framer Motion** - Page transitions and micro-interactions
- **TypeScript** - Type-safe development
- **Modern CSS** - CSS Grid, Flexbox, and custom properties
- **Accessibility** - ARIA labels, keyboard navigation, screen reader support
- **Performance Optimized** - Lazy loading and optimized assets

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: 
  - Framer Motion (React animations)
  - GSAP (Scroll animations)
- **Theme System**: next-themes
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📁 Project Structure

\`\`\`
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Main page with section routing
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── about.tsx            # About section
│   ├── contact.tsx          # Contact form section
│   ├── faq.tsx              # FAQ accordion
│   ├── features.tsx         # Features grid
│   ├── footer.tsx           # Footer component
│   ├── hero.tsx             # Hero landing section
│   ├── loader.tsx           # Animated loader
│   ├── navbar.tsx           # Navigation with theme toggle
│   ├── parallax-transition.tsx # Custom page transition
│   ├── prizes.tsx           # Prizes showcase
│   ├── theme-provider.tsx   # Theme context provider
│   └── timeline.tsx         # Event timeline
├── lib/
│   └── utils.ts             # Utility functions
└── public/                  # Static assets
\`\`\`

## 🎨 Design System

### Color Scheme
- **Primary**: Purple gradient (`hsl(262.1 83.3% 57.8%)`)
- **Secondary**: Neutral tones for balance
- **Dark Mode**: Rich dark backgrounds with proper contrast
- **Light Mode**: Clean, bright interface

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights with gradient text effects
- **Body**: Optimized for readability across devices

### Animations
- **Page Transitions**: Custom parallax split-screen effect
- **Scroll Animations**: GSAP-powered reveal animations
- **Micro-interactions**: Hover effects and button animations
- **Loading States**: Smooth progress indicators

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/PatilPratik16/Vibe-coding-Hackathon-round-1.git
   cd Vibe-coding-Hackathon-round-1
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+
- **Large Desktop**: 1440px+

## 🎯 Judging Criteria Alignment

### Design Accuracy (40%)
- Pixel-perfect responsive design
- Consistent visual hierarchy
- Modern UI/UX principles
- Professional color scheme and typography

### Responsiveness (25%)
- Mobile-first approach
- Fluid layouts across all devices
- Touch-friendly interactions
- Optimized images and assets

### Innovation/Enhancements (20%)
- Custom parallax page transitions
- Advanced animation system
- Dark/light mode implementation
- Interactive components and micro-animations

### Code Quality & Best Practices (15%)
- TypeScript for type safety
- Component-based architecture
- Clean, readable code structure
- Performance optimizations
- Accessibility compliance

## 🌟 Key Highlights

### Unique Parallax Transition
The website features a custom page transition where the screen splits into left and right halves that slide from opposite directions and merge together, creating a unique visual effect.

### Advanced Theme System
Complete dark/light mode implementation with:
- Smooth color transitions
- Theme persistence
- System preference detection
- Custom scrollbar theming

### Performance Optimized
- Lazy loading of components
- Optimized animations
- Minimal bundle size
- Fast loading times

## 📞 Contact Information

- **Developer**: Pratik Patil
- **Email**: pratikpatil886652@gmail.com
- **Phone**: +91-8866529909
- **GitHub**: [@PatilPratik16](https://github.com/PatilPratik16)
- **LinkedIn**: [Pratik Patil](https://www.linkedin.com/in/pratik-patil-187413223/)

## 📄 License

This project is created for hackathon submission purposes. All rights reserved.

## 🙏 Acknowledgments

- **v0.dev** - For the development platform and tools
- **Vercel** - For hosting and deployment
- **shadcn/ui** - For the beautiful UI components
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion & GSAP** - For smooth animations

---

**Built with ❤️ for HackFest 2024**

*This website demonstrates modern frontend development practices and serves as a showcase for the hackathon competition.*
