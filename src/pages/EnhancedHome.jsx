import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail, Code, Briefcase, Award, Coffee, Star, Zap, Heart, Sparkles, Rocket, Globe, ExternalLink, ChevronLeft, ChevronRight, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import ParticleBackground from '../components/ParticleBackground'
import Card from '../components/Card'

// Featured Projects Slider Component
const FeaturedProjectsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  
  const featuredProjects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and real-time inventory management",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      category: "Web Application"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates and team collaboration features",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop"
      ],
      technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      category: "Productivity"
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with comprehensive reporting and insights",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop"
      ],
      technologies: ["React", "Python", "Redis", "Chart.js"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      category: "Analytics"
    },
    {
      id: 4,
      title: "Healthcare Platform",
      description: "Patient management system with appointment scheduling and telemedicine capabilities",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop"
      ],
      technologies: ["Angular", "Spring Boot", "MySQL", "WebRTC"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      category: "Healthcare"
    },
    {
      id: 5,
      title: "Learning Management System",
      description: "Online education platform with video streaming and interactive learning modules",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop"
      ],
      technologies: ["React", "Django", "AWS", "FFmpeg"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com",
      category: "Education"
    }
  ]

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % featuredProjects.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, featuredProjects.length])

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % featuredProjects.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + featuredProjects.length) % featuredProjects.length)
    setIsAutoPlaying(false)
  }

  const getSlidesToShow = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1
      if (window.innerWidth < 1024) return 2
      return 3
    }
    return 3
  }

  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow())

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getSlidesToShow())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="relative overflow-hidden">
      {/* Slider Container */}
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {featuredProjects.map((project, index) => (
          <div key={project.id} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-3">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="p-0 overflow-hidden h-full group relative">
                {/* Modern Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>
                
                {/* Project Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  
                  {/* Modern Overlay with Glassmorphism */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-300"></div>
                  
                  {/* Floating Action Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex gap-3">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-lg"
                      >
                        <Github className="text-white" size={20} />
                      </motion.a>
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-primary/20 backdrop-blur-md rounded-2xl border border-primary/30 hover:bg-primary/30 transition-all duration-300 shadow-lg"
                      >
                        <ExternalLink className="text-white" size={20} />
                      </motion.a>
                    </div>
                  </div>
                  
                  {/* Modern Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <motion.span 
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 bg-gradient-to-r from-primary via-emerald-400 to-cyan-400 text-black text-xs font-bold rounded-full shadow-lg backdrop-blur-sm border border-white/20"
                    >
                      {project.category}
                    </motion.span>
                  </div>
                  
                  {/* Modern Status Indicator */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="w-3 h-3 bg-green-400 rounded-full shadow-lg animate-pulse"></div>
                  </div>
                </div>
                
                {/* Modern Project Info */}
                <div className="p-4 sm:p-6 relative">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white/50 dark:from-gray-800/50 dark:to-gray-900/50 rounded-b-xl"></div>
                  
                  <div className="relative z-10">
                    {/* Title with Modern Typography */}
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-primary group-hover:to-purple-500 transition-all duration-300">
                        {project.title}
                      </h3>
                      <motion.div
                        whileHover={{ rotate: 180 }}
                        className="p-1.5 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 group-hover:from-primary/20 group-hover:to-purple-500/20 transition-all duration-300"
                      >
                        <Star className="text-primary" size={14} />
                      </motion.div>
                    </div>
                    
                    {/* Description with Modern Styling */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Modern Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full border border-gray-200 dark:border-gray-600 hover:border-primary/50 transition-all duration-300 shadow-sm"
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 3 && (
                        <motion.span 
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1.5 bg-gradient-to-r from-primary/20 to-purple-500/20 text-primary text-xs font-bold rounded-full border border-primary/30 shadow-sm"
                        >
                          +{project.technologies.length - 3}
                        </motion.span>
                      )}
                    </div>
                    
                    {/* Modern Action Buttons */}
                    <div className="flex gap-3">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 text-gray-700 dark:text-gray-300 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-primary/50 hover:from-primary/10 hover:to-purple-500/10 hover:text-primary transition-all duration-300 text-sm font-medium shadow-sm"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </motion.a>
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02, y: -2, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)' }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary via-emerald-400 to-cyan-400 text-black rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 text-sm"
                      >
                        <ExternalLink size={16} />
                        <span>Live</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        ))}
      </div>
      
      {/* Modern Navigation Arrows */}
      <motion.button
        onClick={prevSlide}
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 sm:p-4 bg-gradient-to-r from-white/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 rounded-2xl shadow-xl backdrop-blur-md border border-white/20 dark:border-gray-700/50 hover:shadow-2xl hover:border-primary/30 transition-all duration-300 z-10 group"
      >
        <ChevronLeft className="text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors" size={20} />
      </motion.button>
      <motion.button
        onClick={nextSlide}
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.9 }}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 sm:p-4 bg-gradient-to-r from-white/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 rounded-2xl shadow-xl backdrop-blur-md border border-white/20 dark:border-gray-700/50 hover:shadow-2xl hover:border-primary/30 transition-all duration-300 z-10 group"
      >
        <ChevronRight className="text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors" size={20} />
      </motion.button>
      
      {/* Modern Dots Indicator */}
      <div className="flex justify-center mt-6 sm:mt-8 space-x-3">
        {featuredProjects.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setCurrentSlide(index)
              setIsAutoPlaying(false)
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`relative transition-all duration-300 ${
              index === currentSlide 
                ? 'w-8 h-3' 
                : 'w-3 h-3'
            }`}
          >
            <div className={`w-full h-full rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-gradient-to-r from-primary via-emerald-400 to-cyan-400 shadow-lg' 
                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
            }`} />
            {index === currentSlide && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-emerald-400 to-cyan-400 opacity-50 blur-sm"
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  )
}

const EnhancedHome = () => {
  const ref = useRef(null)
  const heroRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const socialLinks = [
    { icon: Github, href: 'https://github.com/DURGESH103', label: 'GitHub', color: 'hover:text-purple-400', bg: 'hover:bg-purple-500/20' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/durgesh-kumar-d18/', label: 'LinkedIn', color: 'hover:text-blue-400', bg: 'hover:bg-blue-500/20' },
    { icon: Mail, href: 'mailto:dkumar11dec2003@gmail.com', label: 'Email', color: 'hover:text-red-400', bg: 'hover:bg-red-500/20' },
  ]

  const stats = [
    { icon: Code, number: '50+', label: 'Projects', gradient: 'from-blue-400 via-purple-500 to-pink-500', delay: 0 },
    { icon: Briefcase, number: '2+', label: 'Years Exp', gradient: 'from-green-400 via-emerald-500 to-teal-500', delay: 0.1 },
    { icon: Award, number: '10+', label: 'Certificates', gradient: 'from-yellow-400 via-orange-500 to-red-500', delay: 0.2 },
    { icon: Coffee, number: '∞', label: 'Coffee Cups', gradient: 'from-pink-400 via-rose-500 to-red-500', delay: 0.3 },
  ]

  const getSkillLevel = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  const techStack = [
    { name: 'React', icon: '⚛️', level: 95, color: 'from-cyan-400 to-blue-500' },
    { name: 'Node.js', icon: '🟢', level: 90, color: 'from-green-400 to-emerald-500' },
    { name: 'Python', icon: '🐍', level: 85, color: 'from-yellow-400 to-orange-500' },
    { name: 'JavaScript', icon: '🟨', level: 95, color: 'from-purple-400 to-pink-500' },
    { name: 'TypeScript', icon: '🔷', level: 80, color: 'from-blue-400 to-indigo-500' },
    { name: 'AWS', icon: '☁️', level: 75, color: 'from-orange-400 to-red-500' },
    { name: 'MongoDB', icon: '🍃', level: 85, color: 'from-green-500 to-teal-500' },
    { name: 'Docker', icon: '🐳', level: 70, color: 'from-blue-500 to-cyan-500' }
  ]

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      desc: 'Optimized performance with modern frameworks',
      gradient: 'from-yellow-400 to-orange-500',
      level: 95
    },
    {
      icon: Heart,
      title: 'User-Centered',
      desc: 'Beautiful UX that users love and remember',
      gradient: 'from-pink-400 to-red-500',
      level: 90
    },
    {
      icon: Star,
      title: 'Quality Code',
      desc: 'Clean, maintainable, and scalable solutions',
      gradient: 'from-purple-400 to-pink-500',
      level: 95
    },
    {
      icon: Globe,
      title: 'Global Ready',
      desc: 'Scalable applications for worldwide reach',
      gradient: 'from-blue-400 to-cyan-500',
      level: 85
    }
  ]

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div ref={ref} className="min-h-screen pt-16 overflow-hidden relative">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        style={{ y, opacity, scale }}
        className="relative min-h-screen flex items-center justify-center px-3 xs:px-4 sm:px-6 lg:px-8"
      >
        <ParticleBackground />
        
        {/* Mobile-optimized Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 xs:top-20 left-5 xs:left-10 w-48 xs:w-72 h-48 xs:h-72 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 xs:bottom-20 right-5 xs:right-10 w-64 xs:w-96 h-64 xs:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] xs:w-[400px] sm:w-[600px] h-[300px] xs:h-[400px] sm:h-[600px] bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto z-10 relative w-full">
          <div className="grid lg:grid-cols-2 gap-6 xs:gap-8 lg:gap-12 items-center min-h-[85vh] xs:min-h-[80vh]">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -100 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              {/* Text Content */}
              <motion.div className="space-y-4 xs:space-y-6 mb-8 xs:mb-12">
                {/* Greeting */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="relative"
                >
                  <motion.h1 
                    className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-3 xs:mb-4 leading-[1.1] xs:leading-tight"
                  >
                    <motion.span 
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                      className="block text-gray-700 dark:text-gray-300 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-1 xs:mb-2"
                    >
                      Hi, I'm
                    </motion.span>
                    <motion.span 
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9, duration: 0.8, type: "spring" }}
                      className="block bg-gradient-to-r from-primary via-emerald-400 to-cyan-400 bg-clip-text text-transparent font-black"
                      style={{
                        backgroundSize: '200% 200%',
                        animation: 'gradient 3s ease infinite'
                      }}
                    >
                      Durgesh Kumar
                    </motion.span>
                  </motion.h1>
                </motion.div>
                
                {/* Role & Description */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  className="relative"
                >
                  <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 xs:mb-4 text-gray-700 dark:text-gray-200">
                    Full Stack Developer
                  </h2>
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 xs:mb-6">
                    
                    <span className="text-xs xs:text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium text-center lg:text-left">
                    </span>
                    
                  </div>
                </motion.div>

                {/* Tech Stack Pills */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3, duration: 0.8 }}
                  className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-6 xs:mb-8"
                >
                  {['React ⚛️', 'Node.js 🟢', 'Python 🐍', 'AWS ☁️', 'MongoDB 🍃'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, y: 20, rotate: -10 }}
                      animate={{ opacity: 1, y: 0, rotate: 0 }}
                      transition={{ delay: 1.4 + index * 0.1, type: "spring" }}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: Math.random() * 10 - 5,
                        boxShadow: '0 10px 30px rgba(0, 255, 153, 0.3)'
                      }}
                      className="px-2.5 py-1.5 xs:px-3 xs:py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-primary/20 to-emerald-500/20 backdrop-blur-sm border border-primary/30 rounded-full text-xs sm:text-sm font-medium hover:shadow-lg transition-all duration-300 cursor-pointer"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
              
              {/* Description */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                className="text-sm xs:text-base sm:text-lg md:text-xl mb-6 xs:mb-8 lg:mb-12 text-gray-600 dark:text-gray-300 leading-relaxed text-center lg:text-left max-w-lg mx-auto lg:mx-0">
              
                Transforming complex problems into elegant digital solutions.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
                className="flex flex-col xs:flex-row gap-3 xs:gap-4 sm:gap-6 mb-6 xs:mb-8 lg:mb-12 justify-center lg:justify-start">
              
                <motion.button
                  onClick={scrollToProjects}
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 255, 153, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-5 xs:px-6 sm:px-8 py-3 xs:py-3.5 sm:py-4 bg-gradient-to-r from-primary via-emerald-400 to-cyan-400 text-black font-bold rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 w-full xs:w-auto">
                
                  <span className="relative flex items-center justify-center text-sm xs:text-base">
                    <Rocket className="mr-2 group-hover:animate-bounce" size={18} />
                    View My Work
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </span>
                </motion.button>
                
                <motion.a
                  href="/resume.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-5 xs:px-6 sm:px-8 py-3 xs:py-3.5 sm:py-4 border-2 border-primary/50 text-primary rounded-2xl font-bold hover:bg-primary hover:text-black transition-all duration-300 backdrop-blur-sm text-sm xs:text-base w-full xs:w-auto">
                
                  <span className="flex items-center justify-center">
                    <Download className="mr-2 group-hover:animate-bounce" size={18} />
                    Download Resume
                  </span>
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2, duration: 0.8 }}
                className="flex justify-center lg:justify-start space-x-4 xs:space-x-5 sm:space-x-6">
              
                {socialLinks.map(({ icon: Icon, href, label, color, bg }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.4 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.15, 
                      y: -5,
                      boxShadow: '0 15px 35px rgba(0, 255, 153, 0.2)'
                    }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 xs:p-3.5 sm:p-4 rounded-2xl border border-white/20 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 ${color} ${bg}`}
                    aria-label={label}
                  >
                    <Icon size={20} className="xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Profile Section */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 100 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              className="flex justify-center lg:justify-end order-1 lg:order-2 mb-6 xs:mb-8 lg:mb-0">
            
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 20 }}
                className="relative"
              >
                <div className="relative w-56 h-56 xs:w-64 xs:h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  {/* Animated Ring */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'conic-gradient(from 0deg, #00FF99, #00CC7A, #009966, #00FF99)',
                      padding: '3px xs:4px'
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-white dark:bg-dark"></div>
                  </motion.div>
                  
                  {/* Profile Image */}
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    src="/images/profile/profile.jpg"
                    alt="Durgesh Kumar"
                    className="relative w-full h-full rounded-full object-cover border-4 border-transparent shadow-2xl z-10"
                  />
                  
                  {/* Floating Icons */}
                  <motion.div
                    animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-3 xs:-top-4 -right-3 xs:-right-4 w-10 h-10 xs:w-12 xs:h-12 bg-gradient-to-r from-primary to-emerald-400 rounded-full flex items-center justify-center text-black font-bold text-base xs:text-lg shadow-lg"
                  >
                    ⚡
                  </motion.div>
                  <motion.div
                    animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-3 xs:-bottom-4 -left-3 xs:-left-4 w-10 h-10 xs:w-12 xs:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-base xs:text-lg shadow-lg"
                  >
                    🚀
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>


      </motion.section>

      {/* Stats Section */}
      <section className="py-12 xs:py-16 sm:py-20 px-3 xs:px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-purple-500/5"></div>
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Achievements in Numbers
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-6 md:gap-8">
            {stats.map(({ icon: Icon, number, label, gradient, delay }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: delay, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group"
              >
                <Card className="p-3 xs:p-4 sm:p-6 md:p-8 text-center relative overflow-hidden h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`inline-flex p-2.5 xs:p-3 sm:p-4 rounded-2xl bg-gradient-to-br ${gradient} mb-3 xs:mb-4 shadow-lg`}
                  >
                    <Icon className="text-white" size={20} />
                  </motion.div>
                  <motion.h3 
                    className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-black mb-2 text-gray-800 dark:text-white"
                    whileHover={{ scale: 1.1 }}
                  >
                    {number}
                  </motion.h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium text-xs xs:text-sm sm:text-base">{label}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-12 xs:py-16 sm:py-20 px-3 xs:px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Tech Stack & Expertise
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Mastering cutting-edge technologies to build tomorrow's solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className={`p-3 xs:p-4 sm:p-6 group hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/50 dark:to-gray-900/50`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  <div className="relative z-10 text-center">
                    <div className="text-xl xs:text-2xl sm:text-3xl mb-2">{tech.icon}</div>
                    <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold group-hover:text-primary transition-colors mb-3">
                      {tech.name}
                    </h3>
                    <span className={`inline-block px-4 py-2 text-xs font-semibold rounded-full bg-gradient-to-r ${tech.color} text-white shadow-lg transform group-hover:scale-105 transition-transform duration-300`}>
                      {getSkillLevel(tech.level)}
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 xs:py-16 sm:py-20 px-3 xs:px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              What Sets Me Apart
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className={`p-4 xs:p-6 sm:p-8 text-center group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 h-full relative overflow-hidden bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/50 dark:to-gray-900/50`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`inline-flex p-3 xs:p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-4 xs:mb-6 shadow-lg`}
                    >
                      <feature.icon className="text-white" size={24} />
                    </motion.div>
                    <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-3 xs:mb-4 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-xs xs:text-sm sm:text-base mb-4">{feature.desc}</p>
                    <span className={`inline-block px-4 py-2 text-xs font-semibold rounded-full bg-gradient-to-r ${feature.gradient} text-white shadow-lg transform group-hover:scale-105 transition-transform duration-300`}>
                      {getSkillLevel(feature.level)}
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section id="projects" className="py-12 xs:py-16 sm:py-20 px-3 xs:px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-primary/5 via-transparent to-purple-500/5"></div>
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Discover my latest work and creative solutions that push boundaries
            </p>
          </motion.div>

          {/* Featured Projects Slider */}
          <FeaturedProjectsSlider />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/projects"
              className="inline-flex items-center px-4 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 bg-gradient-to-r from-primary to-emerald-400 text-black font-bold rounded-2xl hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 text-xs xs:text-sm sm:text-base"
            >
              <Star className="mr-2" size={20} />
              View All Projects
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 xs:py-16 sm:py-20 px-3 xs:px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-6 xs:p-8 sm:p-12 md:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
              <div className="relative z-10">
                <motion.h2 
                  className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 xs:mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                >
                  Ready to Build Something Extraordinary?
                </motion.h2>
                <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 xs:mb-10 leading-relaxed max-w-3xl mx-auto">
                  Let's collaborate and transform your vision into reality with innovative technology and creative excellence.
                </p>
                <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 sm:gap-6 justify-center">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center px-4 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 bg-gradient-to-r from-primary to-emerald-400 text-black font-bold rounded-2xl hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 text-xs xs:text-sm sm:text-base"
                  >
                    <Mail className="mr-2 group-hover:animate-bounce" size={20} />
                    Let's Connect
                  </Link>
                  <Link
                    to="/projects"
                    className="inline-flex items-center px-4 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 border-2 border-primary/50 text-primary rounded-2xl font-bold hover:bg-primary hover:text-black transition-all duration-300 text-xs xs:text-sm sm:text-base"
                  >
                    <Sparkles className="mr-2" size={20} />
                    Explore Work
                  </Link>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default EnhancedHome