import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail, Code, Briefcase, Award, Coffee, Star, Zap, Heart, Sparkles, Rocket, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import ParticleBackground from '../components/ParticleBackground'
import Card from '../components/Card'

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
      gradient: 'from-yellow-400 to-orange-500'
    },
    { 
      icon: Heart, 
      title: 'User-Centered', 
      desc: 'Beautiful UX that users love and remember',
      gradient: 'from-pink-400 to-red-500'
    },
    { 
      icon: Star, 
      title: 'Quality Code', 
      desc: 'Clean, maintainable, and scalable solutions',
      gradient: 'from-purple-400 to-pink-500'
    },
    { 
      icon: Globe, 
      title: 'Global Ready', 
      desc: 'Scalable applications for worldwide reach',
      gradient: 'from-blue-400 to-cyan-500'
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
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <ParticleBackground />
        
        {/* Simple Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto z-10 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -100 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-left"
            >
              {/* Text Content */}
              <motion.div className="space-y-6 mb-12">
                {/* Greeting */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="relative"
                >
                  <motion.h1 
                    className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight"
                  >
                    <motion.span 
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                      className="block text-gray-700 dark:text-gray-300"
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
                  <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-gray-700 dark:text-gray-200">
                    Full Stack Developer & Digital Innovator
                  </h2>
                  <div className="flex items-center gap-2 mb-6">
                    <Sparkles className="text-primary animate-pulse" size={20} />
                    <span className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
                      Crafting the future, one line of code at a time
                    </span>
                    <Sparkles className="text-primary animate-pulse" size={20} />
                  </div>
                </motion.div>

                {/* Tech Stack Pills */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3, duration: 0.8 }}
                  className="flex flex-wrap gap-2 sm:gap-3 mb-8"
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
                      className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-primary/20 to-emerald-500/20 backdrop-blur-sm border border-primary/30 rounded-full text-xs sm:text-sm font-medium hover:shadow-lg transition-all duration-300 cursor-pointer"
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
                className="text-sm xs:text-base sm:text-lg md:text-xl mb-8 lg:mb-12 text-gray-600 dark:text-gray-300 leading-relaxed">
              
                Transforming complex problems into elegant digital solutions. I blend creativity with 
                cutting-edge technology to build experiences that users love and businesses need.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
                className="flex flex-col xs:flex-row gap-3 xs:gap-4 sm:gap-6 mb-8 lg:mb-12">
              
                <motion.button
                  onClick={scrollToProjects}
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 255, 153, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-4 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 bg-gradient-to-r from-primary via-emerald-400 to-cyan-400 text-black font-bold rounded-2xl overflow-hidden shadow-2xl transition-all duration-300">
                
                  <span className="relative flex items-center justify-center text-sm sm:text-base">
                    <Rocket className="mr-2 group-hover:animate-bounce" size={20} />
                    View My Work
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </span>
                </motion.button>
                
                <motion.a
                  href="/resume.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-4 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 border-2 border-primary/50 text-primary rounded-2xl font-bold hover:bg-primary hover:text-black transition-all duration-300 backdrop-blur-sm text-xs xs:text-sm sm:text-base">
                
                  <span className="flex items-center justify-center">
                    <Download className="mr-2 group-hover:animate-bounce" size={20} />
                    Download Resume
                  </span>
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2, duration: 0.8 }}
                className="flex space-x-3 xs:space-x-4 sm:space-x-6">
              
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
                      scale: 1.2, 
                      y: -5,
                      boxShadow: '0 15px 35px rgba(0, 255, 153, 0.2)'
                    }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2.5 xs:p-3 sm:p-4 rounded-2xl border border-white/20 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 ${color} ${bg}`}
                    aria-label={label}
                  >
                    <Icon size={18} className="xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Profile Section */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 100 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              className="flex justify-center lg:justify-end order-first lg:order-last">
            
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 20 }}
                className="relative"
              >
                <div className="relative w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  {/* Animated Ring */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'conic-gradient(from 0deg, #00FF99, #00CC7A, #009966, #00FF99)',
                      padding: '4px'
                    }}
                  >
                    <div className="w-full h-full rounded-full bg-white dark:bg-dark"></div>
                  </motion.div>
                  
                  {/* Profile Image */}
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="Durgesh Kumar"
                    className="relative w-full h-full rounded-full object-cover border-4 border-transparent shadow-2xl z-10"
                  />
                  
                  {/* Floating Icons */}
                  <motion.div
                    animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-primary to-emerald-400 rounded-full flex items-center justify-center text-black font-bold text-lg shadow-lg"
                  >
                    ⚡
                  </motion.div>
                  <motion.div
                    animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                  >
                    🚀
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-primary/60 rounded-full flex justify-center backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </div>
        </motion.div>
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
                <Card className="p-3 xs:p-4 sm:p-6 group hover:shadow-2xl transition-all duration-500 h-full">
                  <div className="text-center mb-4">
                    <div className="text-xl xs:text-2xl sm:text-3xl mb-2">{tech.icon}</div>
                    <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold group-hover:text-primary transition-colors">
                      {tech.name}
                    </h3>
                  </div>
                  <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-1.5 xs:h-2 sm:h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${tech.color} rounded-full relative`}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </motion.div>
                  </div>
                  <div className="text-center mt-2">
                    <span className="text-xs text-gray-600 dark:text-gray-400">{tech.level}%</span>
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
                <Card className="p-4 xs:p-6 sm:p-8 text-center group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 h-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex p-3 xs:p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-4 xs:mb-6 shadow-lg`}
                  >
                    <feature.icon className="text-white" size={24} />
                  </motion.div>
                  <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-3 xs:mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-xs xs:text-sm sm:text-base">{feature.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section id="projects" className="py-12 xs:py-16 sm:py-20 px-3 xs:px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-primary/5 via-transparent to-purple-500/5"></div>
        <div className="max-w-6xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 xs:mb-12 max-w-3xl mx-auto px-2">
              Discover my latest work and creative solutions that push boundaries
            </p>
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