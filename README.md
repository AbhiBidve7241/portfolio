# 🚀 Abhishek Bidwe - Developer Portfolio

A modern, OS-inspired portfolio web application built with React and Tailwind CSS.

## ✨ Features

- **OS-Inspired Interface**: Unique mobile/desktop layouts mimicking operating systems
- **Fully Responsive**: Perfect experience on mobile, tablet, and desktop
- **Dark/Light Theme**: Toggle between themes with localStorage persistence
- **Smooth Animations**: Framer Motion powered transitions
- **Fast Performance**: Built with Vite for lightning-fast development
- **Clean Code**: Well-organized component structure

## 🛠️ Tech Stack

- **React 18**: Latest React with hooks
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations
- **Vite**: Fast build tool
- **ES6+**: Modern JavaScript

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup Instructions

1. **Clone/Extract the project**
   ```bash
   cd portfolio-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   The app will open at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```
   
   Production files will be in the `dist` folder

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
portfolio-app/
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── MobileLayout.jsx    # Mobile OS interface
│   │   │   └── DesktopLayout.jsx   # Desktop sidebar layout
│   │   ├── Sections/
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Resume.jsx
│   │   │   └── Contact.jsx
│   │   └── EntryScreen.jsx
│   ├── data/
│   │   └── content.js              # All portfolio data
│   ├── hooks/
│   │   └── useMediaQuery.js        # Responsive hook
│   ├── App.jsx                     # Main app component
│   ├── index.js                    # Entry point
│   └── index.css                   # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Update Your Information

Edit `/src/data/content.js` to update:
- Personal info (name, email, phone, links)
- Projects details
- Work experience
- Skills and tech stack
- Education

### Change Colors

Modify the Tailwind theme in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      // Add your custom colors
    }
  }
}
```

### Add/Remove Sections

1. Create new component in `/src/components/Sections/`
2. Import in both Layout components
3. Add to navigation menu arrays

## 🚀 Deployment

### Deploy to Vercel (Recommended)
1. Push to GitHub
2. Import project to Vercel
3. Deploy (automatic)

### Deploy to Netlify
1. Push to GitHub
2. Connect to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Deploy to GitHub Pages
1. Install gh-pages: `npm install gh-pages --save-dev`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (Home screen layout)
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px (Sidebar layout)

## 🎯 Features Overview

### Mobile Layout
- Widget card with stats
- App icon grid (6 apps)
- Bottom dock navigation
- Full-screen sections

### Desktop Layout
- Sidebar navigation
- Top bar with theme toggle
- Main content area
- Smooth transitions

### Sections
1. **About**: Profile, highlights, education, stats
2. **Projects**: Featured projects with tech stacks
3. **Experience**: Timeline of work history
4. **Skills**: Categorized skill bars
5. **Resume**: Download + quick summary
6. **Contact**: Contact form + social links

## 🔧 Troubleshooting

### Dependencies not installing
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 already in use
Edit `vite.config.js` and change port number

### Tailwind styles not working
```bash
npm install -D tailwindcss postcss autoprefixer
```

## 📝 License

MIT License - Feel free to use for your own portfolio!

## 👨‍💻 Author

**Abhishek Bidwe**
- Email: abhishekbidwe123@gmail.com
- LinkedIn: [abhishekbidwe7241](https://linkedin.com/in/abhishekbidwe7241)
- GitHub: [AbhiBidve7241](https://github.com/AbhiBidve7241)

## 🙏 Acknowledgments

- Framer Motion for animations
- Tailwind CSS for styling
- React community for awesome tools

---

**Made with ❤️ by Abhishek Bidwe**