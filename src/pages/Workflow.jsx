import { motion } from 'framer-motion'
import { 
  Search, 
  Lightbulb, 
  Code, 
  TestTube, 
  Rocket, 
  Users,
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Eye,
  Folder,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import Card from '../components/Card'
import { useState, useEffect } from 'react'

const Workflow = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageIndex, setImageIndex] = useState(0)
  
  const slidesToShow = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  }
  const workflowSteps = [
    {
      id: 1,
      title: "Discovery & Research",
      description: "Understanding requirements, analyzing user needs, and researching the best solutions.",
      icon: Search,
      color: "from-blue-500 to-cyan-500",
      details: ["Requirements gathering", "User research", "Market analysis", "Technology selection"]
    },
    {
      id: 2,
      title: "Planning & Design",
      description: "Creating wireframes, designing architecture, and planning the development roadmap.",
      icon: Lightbulb,
      color: "from-purple-500 to-pink-500",
      details: ["System architecture", "UI/UX design", "Database design", "Project timeline"]
    },
    {
      id: 3,
      title: "Development",
      description: "Writing clean, efficient code following best practices and modern standards.",
      icon: Code,
      color: "from-green-500 to-emerald-500",
      details: ["Frontend development", "Backend development", "API integration", "Code optimization"]
    },
    {
      id: 4,
      title: "Testing & QA",
      description: "Comprehensive testing to ensure quality, performance, and reliability.",
      icon: TestTube,
      color: "from-orange-500 to-red-500",
      details: ["Unit testing", "Integration testing", "Performance testing", "Bug fixing"]
    },
    {
      id: 5,
      title: "Deployment",
      description: "Launching the application with proper CI/CD pipelines and monitoring.",
      icon: Rocket,
      color: "from-indigo-500 to-purple-500",
      details: ["Production deployment", "CI/CD setup", "Performance monitoring", "Security implementation"]
    },
    {
      id: 6,
      title: "Maintenance & Support",
      description: "Ongoing support, updates, and continuous improvement based on feedback.",
      icon: Users,
      color: "from-teal-500 to-green-500",
      details: ["Bug fixes", "Feature updates", "Performance optimization", "User support"]
    }
  ]

  const featuredProjects = [
    {
      name: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      tech: ["React", "Node.js", "MongoDB"],
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=300&fit=crop"
      ],
      link: "https://ecommerce-demo.com",
      category: "Web Application"
    },
    {
      name: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      tech: ["Vue.js", "Express", "PostgreSQL"],
      images: [
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop"
      ],
      link: "https://taskapp-demo.com",
      category: "Productivity"
    },
    {
      name: "Social Media Dashboard",
      description: "Analytics dashboard for social media management",
      tech: ["React", "Python", "Redis"],
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=300&fit=crop"
      ],
      link: "https://social-dashboard.com",
      category: "Analytics"
    },
    {
      name: "Restaurant Website",
      description: "Modern restaurant website with online ordering system",
      tech: ["Next.js", "Stripe", "Firebase"],
      images: [
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop"
      ],
      link: "https://restaurant-demo.com",
      category: "Business"
    },
    {
      name: "Healthcare Platform",
      description: "Patient management system with appointment scheduling",
      tech: ["Angular", "Spring Boot", "MySQL"],
      images: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop"
      ],
      link: "https://healthcare-demo.com",
      category: "Healthcare"
    },
    {
      name: "Learning Management System",
      description: "Online education platform with video streaming",
      tech: ["React", "Django", "AWS"],
      images: [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop"
      ],
      link: "https://lms-demo.com",
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

  const openImageModal = (project, imgIndex) => {
    setSelectedImage(project)
    setImageIndex(imgIndex)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    setImageIndex(prev => (prev + 1) % selectedImage.images.length)
  }

  const prevImage = () => {
    setImageIndex(prev => (prev - 1 + selectedImage.images.length) % selectedImage.images.length)
  }

  return (
    <div className="min-h-screen pt-16 xs:pt-20 pb-12 xs:pb-16 sm:pb-20">
      {/* Hero Section */}
      <section className="py-12 xs:py-16 sm:py-20 px-3 xs:px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10"></div>
        
        <div className="max-w-6xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-4 xs:mb-6 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              My Development Workflow
            </h1>
            <p className="text-base xs:text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A systematic approach to building exceptional digital experiences from concept to deployment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Workflow Steps */}
      <section className="py-12 xs:py-16 sm:py-20 px-3 xs:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8 xs:space-y-12 sm:space-y-16">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-6 xs:gap-8 lg:gap-12`}
              >
                {/* Step Content */}
                <div className="flex-1 w-full">
                  <Card className="p-6 xs:p-8 h-full">
                    <div className="flex items-start gap-4 xs:gap-6 mb-4 xs:mb-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`p-3 xs:p-4 rounded-2xl bg-gradient-to-br ${step.color} shadow-lg flex-shrink-0`}
                      >
                        <step.icon className="text-white" size={24} />
                      </motion.div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`text-sm font-bold px-2 py-1 rounded-full bg-gradient-to-r ${step.color} text-white`}>
                            Step {step.id}
                          </span>
                        </div>
                        <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-3 xs:mb-4 text-gray-800 dark:text-white">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm xs:text-base leading-relaxed mb-4 xs:mb-6">
                          {step.description}
                        </p>
                        
                        {/* Details List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-3">
                          {step.details.map((detail, detailIndex) => (
                            <motion.div
                              key={detailIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 * detailIndex }}
                              className="flex items-center gap-2 xs:gap-3"
                            >
                              <CheckCircle className="text-primary flex-shrink-0" size={16} />
                              <span className="text-gray-700 dark:text-gray-300 text-sm xs:text-base">
                                {detail}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Step Number & Arrow */}
                <div className="flex flex-col items-center gap-4 lg:gap-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-16 h-16 xs:w-20 xs:h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl`}
                  >
                    <span className="text-white font-bold text-xl xs:text-2xl">
                      {step.id}
                    </span>
                  </motion.div>
                  
                  {index < workflowSteps.length - 1 && (
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="hidden lg:block"
                    >
                      <ArrowRight 
                        className={`text-primary ${index % 2 === 0 ? '' : 'rotate-180'}`} 
                        size={24} 
                      />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-12 xs:py-16 sm:py-20 px-3 xs:px-4 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 xs:mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Folder className="text-primary" size={32} />
              <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Featured Projects
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Explore my latest work showcasing the complete development workflow in action
            </p>
          </motion.div>

          <div className="relative overflow-hidden">
            {/* Slider Container */}
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {featuredProjects.map((project, index) => (
                <div key={index} className="w-1/3 flex-shrink-0 px-3">
                  <Card className="p-0 overflow-hidden hover-lift h-full">
                    {/* Project Images */}
                    <div className="relative h-48 overflow-hidden">
                      <div className="grid grid-cols-3 h-full">
                        {project.images.map((image, imgIndex) => (
                          <motion.div
                            key={imgIndex}
                            whileHover={{ scale: 1.1 }}
                            className="relative overflow-hidden cursor-pointer"
                            onClick={() => openImageModal(project, imgIndex)}
                          >
                            <img
                              src={image}
                              alt={`${project.name} screenshot ${imgIndex + 1}`}
                              className="w-full h-full object-cover transition-transform duration-300"
                              onError={(e) => {
                                e.target.src = `https://via.placeholder.com/300x200/6366f1/ffffff?text=Project+${imgIndex + 1}`
                              }}
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <Eye className="text-white" size={20} />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 bg-primary/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                          {project.category}
                        </span>
                      </div>
                      
                      {/* Visit Link */}
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="absolute top-3 right-3 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all"
                      >
                        <ExternalLink className="text-gray-700 dark:text-gray-300" size={16} />
                      </motion.a>
                    </div>
                    
                    {/* Project Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                        {project.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* Visit Button */}
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-primary to-purple-500 text-white font-medium rounded-lg hover:shadow-lg transition-all"
                      >
                        <span>Visit Project</span>
                        <ExternalLink className="ml-2" size={16} />
                      </motion.a>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-all z-10"
            >
              <ChevronLeft className="text-gray-700 dark:text-gray-300" size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 dark:bg-gray-800/90 rounded-full shadow-lg backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-all z-10"
            >
              <ChevronRight className="text-gray-700 dark:text-gray-300" size={24} />
            </button>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index)
                  setIsAutoPlaying(false)
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-primary scale-125' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <motion.img
              key={imageIndex}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage.images[imageIndex]}
              alt={`${selectedImage.name} screenshot ${imageIndex + 1}`}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              onError={(e) => {
                e.target.src = `https://via.placeholder.com/800x600/6366f1/ffffff?text=Project+Image`
              }}
            />
            
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all"
            >
              <ChevronLeft className="text-white" size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all"
            >
              <ChevronRight className="text-white" size={24} />
            </button>
            
            {/* Close Button */}
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all"
            >
              <X className="text-white" size={20} />
            </button>
            
            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4">
              <h3 className="text-white font-bold text-lg mb-1">{selectedImage.name}</h3>
              <p className="text-gray-300 text-sm mb-2">{selectedImage.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {selectedImage.tech.slice(0, 3).map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-white/20 text-white text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="text-gray-300 text-sm">
                  {imageIndex + 1} / {selectedImage.images.length}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* CTA Section */}
      <section className="py-12 xs:py-16 sm:py-20 px-3 xs:px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-purple-500/5"></div>
        
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-4 xs:mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base xs:text-lg mb-6 xs:mb-8 leading-relaxed">
              Let's work together to bring your ideas to life with this proven development process
            </p>
            
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 255, 153, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 xs:px-8 py-3 xs:py-4 bg-gradient-to-r from-primary via-emerald-400 to-cyan-400 text-black font-bold rounded-2xl shadow-2xl transition-all duration-300"
            >
              <span className="text-sm xs:text-base">Get Started Today</span>
              <ArrowRight className="ml-2" size={18} />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Workflow