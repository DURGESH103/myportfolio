# Modern Portfolio Website

A professional, responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional UI with glassmorphism effects
- **Dark/Light Mode**: Toggle between themes with localStorage persistence
- **Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion animations and AOS scroll effects
- **Fast Performance**: Built with Vite for optimal loading speeds
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router DOM** - Navigation
- **Lucide React** - Icons
- **AOS** - Scroll animations

## 🎨 Color Palette

- Primary: `#00FF99` (Green accent)
- Dark Background: `#0E0E0E`
- Light Background: `#FFFFFF`
- Dark Text: `#111111`
- Light Text: `#EAEAEA`

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── data/          # Static data files
│   └── assets/        # Images and static files
├── public/            # Public assets
└── ...config files
```

## 🚀 Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

## 📝 Customization

### Adding Projects
Edit `src/data/projectsData.js` to add your projects:

```javascript
{
  id: 1,
  title: "Project Name",
  description: "Project description",
  image: "/path/to/image",
  technologies: ["React", "Node.js"],
  githubUrl: "https://github.com/...",
  liveUrl: "https://...",
  featured: true
}
```

### Adding Certifications
Edit `src/data/certificationsData.js` to add certifications.

### Updating Skills
Edit `src/data/skillsData.js` to update your skills and proficiency levels.

### Personal Information
Update the following files with your information:
- `src/pages/Home.jsx` - Hero section
- `src/pages/About.jsx` - About information
- `src/components/Footer.jsx` - Social links
- `src/pages/Contact.jsx` - Contact information

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🌟 Performance Features

- Lazy loading for images
- Optimized animations
- Minimal bundle size
- Fast loading times

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Feel free to submit issues and enhancement requests!