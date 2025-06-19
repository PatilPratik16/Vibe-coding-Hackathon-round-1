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

## 🚀 Complete Setup Guide

### Prerequisites

Before you begin, ensure you have the following installed on your system:

#### 1. **Node.js** (Required)
- **Version**: 18.0.0 or higher
- **Download**: [https://nodejs.org/](https://nodejs.org/)
- **Verify Installation**:
  \`\`\`bash
  node --version
  npm --version
  \`\`\`

#### 2. **Git** (Required)
- **Download**: [https://git-scm.com/](https://git-scm.com/)
- **Verify Installation**:
  \`\`\`bash
  git --version
  \`\`\`

#### 3. **Code Editor** (Recommended)
- **VS Code**: [https://code.visualstudio.com/](https://code.visualstudio.com/)
- **Recommended Extensions**:
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - TypeScript Importer
  - Prettier - Code formatter

### Installation Methods

#### Method 1: Clone from GitHub (Recommended)

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/PatilPratik16/Vibe-coding-Hackathon-round-1.git
   \`\`\`

2. **Navigate to project directory**
   \`\`\`bash
   cd Vibe-coding-Hackathon-round-1
   \`\`\`

3. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`
   
   *Or if you prefer yarn:*
   \`\`\`bash
   yarn install
   \`\`\`

4. **Start development server**
   \`\`\`bash
   npm run dev
   \`\`\`
   
   *Or with yarn:*
   \`\`\`bash
   yarn dev
   \`\`\`

5. **Open in browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - The website should load with all features working

#### Method 2: Download ZIP

1. **Download the project**
   - Go to [GitHub Repository](https://github.com/PatilPratik16/Vibe-coding-Hackathon-round-1)
   - Click "Code" → "Download ZIP"
   - Extract the ZIP file to your desired location

2. **Open terminal/command prompt**
   - Navigate to the extracted folder
   \`\`\`bash
   cd path/to/extracted/folder
   \`\`\`

3. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

4. **Start development server**
   \`\`\`bash
   npm run dev
   \`\`\`

#### Method 3: Fork and Clone (For Contributors)

1. **Fork the repository**
   - Go to [GitHub Repository](https://github.com/PatilPratik16/Vibe-coding-Hackathon-round-1)
   - Click "Fork" button in the top right

2. **Clone your fork**
   \`\`\`bash
   git clone https://github.com/YOUR_USERNAME/Vibe-coding-Hackathon-round-1.git
   \`\`\`

3. **Add upstream remote**
   \`\`\`bash
   cd Vibe-coding-Hackathon-round-1
   git remote add upstream https://github.com/PatilPratik16/Vibe-coding-Hackathon-round-1.git
   \`\`\`

4. **Install and run**
   \`\`\`bash
   npm install
   npm run dev
   \`\`\`

### Platform-Specific Setup

#### Windows Users

1. **Install Node.js**
   - Download from [nodejs.org](https://nodejs.org/)
   - Run the installer (.msi file)
   - Restart your computer

2. **Install Git**
   - Download from [git-scm.com](https://git-scm.com/)
   - Use Git Bash for terminal commands

3. **Recommended Terminal**
   - Use **Git Bash** or **Windows Terminal**
   - Avoid Command Prompt for better compatibility

#### macOS Users

1. **Install Node.js**
   \`\`\`bash
   # Using Homebrew (recommended)
   brew install node
   
   # Or download from nodejs.org
   \`\`\`

2. **Install Git**
   \`\`\`bash
   # Using Homebrew
   brew install git
   
   # Or use Xcode Command Line Tools
   xcode-select --install
   \`\`\`

#### Linux Users (Ubuntu/Debian)

1. **Install Node.js**
   \`\`\`bash
   # Update package index
   sudo apt update
   
   # Install Node.js
   sudo apt install nodejs npm
   
   # Or install latest version via NodeSource
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   \`\`\`

2. **Install Git**
   \`\`\`bash
   sudo apt install git
   \`\`\`

### Environment Setup

#### 1. **Create Environment File** (Optional)
\`\`\`bash
# Create .env.local file in root directory
touch .env.local
\`\`\`

Add any environment variables if needed:
\`\`\`env
# .env.local
NEXT_PUBLIC_SITE_URL=http://localhost:3000
\`\`\`

#### 2. **Configure VS Code** (Optional)
Create `.vscode/settings.json`:
\`\`\`json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative"
}
\`\`\`

### Available Scripts

\`\`\`bash
# Development server
npm run dev          # Start development server on localhost:3000

# Production build
npm run build        # Create optimized production build
npm run start        # Start production server

# Code quality
npm run lint         # Run ESLint for code quality checks
npm run type-check   # Run TypeScript type checking

# Deployment
npm run export       # Export static files (if needed)
\`\`\`

### Troubleshooting

#### Common Issues and Solutions

1. **Port 3000 already in use**
   \`\`\`bash
   # Kill process on port 3000
   npx kill-port 3000
   
   # Or run on different port
   npm run dev -- -p 3001
   \`\`\`

2. **Node modules issues**
   \`\`\`bash
   # Clear npm cache
   npm cache clean --force
   
   # Delete node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   \`\`\`

3. **Permission errors (macOS/Linux)**
   \`\`\`bash
   # Fix npm permissions
   sudo chown -R $(whoami) ~/.npm
   \`\`\`

4. **Git clone issues**
   \`\`\`bash
   # If HTTPS doesn't work, try SSH
   git clone git@github.com:PatilPratik16/Vibe-coding-Hackathon-round-1.git
   \`\`\`

#### Performance Optimization

1. **Enable faster builds**
   \`\`\`bash
   # Add to package.json scripts
   "dev:turbo": "next dev --turbo"
   \`\`\`

2. **Clear Next.js cache**
   \`\`\`bash
   rm -rf .next
   npm run dev
   \`\`\`

### Deployment Options

#### 1. **Vercel** (Recommended)
\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect GitHub repo to Vercel dashboard
\`\`\`

#### 2. **Netlify**
\`\`\`bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=out
\`\`\`

#### 3. **GitHub Pages**
\`\`\`bash
# Add to package.json
"homepage": "https://yourusername.github.io/repository-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d out"
}

# Install gh-pages
npm install --save-dev gh-pages

# Deploy
npm run deploy
\`\`\`

### Development Workflow

1. **Start development**
   \`\`\`bash
   npm run dev
   \`\`\`

2. **Make changes**
   - Edit files in your preferred code editor
   - Changes will auto-reload in browser

3. **Test responsiveness**
   - Use browser dev tools
   - Test on different screen sizes
   - Verify dark/light mode toggle

4. **Build for production**
   \`\`\`bash
   npm run build
   npm run start
   \`\`\`

### Getting Help

If you encounter any issues:

1. **Check the console** for error messages
2. **Verify all prerequisites** are installed correctly
3. **Clear cache and reinstall** dependencies
4. **Check GitHub Issues** for similar problems
5. **Contact developer** (details below)

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
