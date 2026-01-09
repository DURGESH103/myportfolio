import { motion } from 'framer-motion'
import { Star, Filter, Search, Grid, List, Eye, Github, ExternalLink, Calendar, Tag } from 'lucide-react'
import { useState } from 'react'
import LazyImage from '../components/LazyImage'
import AnimatedCounter from '../components/AnimatedCounter'
import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import { projectsData } from '../data/projectsData'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState('grid')
  const [selectedProject, setSelectedProject] = useState(null)
  
  const categories = ['all', 'frontend', 'fullstack', 'mobile', 'ui/ux']
  
  const filteredProjects = projectsData.filter(project => {
    const matchesFilter = filter === 'all' || project.category?.toLowerCase() === filter
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  const featuredProjects = filteredProjects.filter(project => project.featured)
  const otherProjects = filteredProjects.filter(project => !project.featured)

  return (
    <div className="min-h-screen pt-16 xs:pt-20 pb-12 xs:pb-16">
      {/* Hero Section with Gradient Background */}
      <section className="relative py-12 xs:py-16 sm:py-20 px-3 xs:px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-pink-500/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 xs:mb-12"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4 xs:mb-6"
            >
              <Star className="text-primary" size={16} />
              <span className="text-primary font-medium text-sm">Portfolio Showcase</span>
            </motion.div>
            
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-4 xs:mb-6">
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                My Projects
              </span>
            </h1>
            <p className="text-base xs:text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Explore my creative solutions and technical expertise through these carefully crafted projects
            </p>
          </motion.div>

          {/* Enhanced Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects, technologies, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-base rounded-2xl bg-white/80 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 backdrop-blur-sm shadow-lg"
              />
            </div>
            
            {/* Filter and View Controls */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              {/* Category Filters */}
              <div className="flex gap-2 flex-wrap justify-center sm:justify-start">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setFilter(category)}
                    className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 capitalize ${
                      filter === category
                        ? 'bg-primary text-black shadow-lg shadow-primary/25'
                        : 'bg-white/60 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 hover:border-primary/50 hover:bg-primary/10'
                    }`}
                  >
                    {category === 'ui/ux' ? 'UI/UX' : category}
                  </motion.button>
                ))}
              </div>
              
              {/* View Mode Toggle */}
              <div className="flex items-center gap-2 bg-white/60 dark:bg-gray-800/60 rounded-xl p-1 border border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === 'grid' ? 'bg-primary text-black' : 'text-gray-600 dark:text-gray-400 hover:text-primary'
                  }`}
                >
                  <Grid size={18} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === 'list' ? 'bg-primary text-black' : 'text-gray-600 dark:text-gray-400 hover:text-primary'
                  }`}
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 xs:py-16 sm:py-20 px-3 xs:px-4">
        <div className="max-w-7xl mx-auto">
          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 xs:mb-20"
            >
              <div className="flex items-center justify-center mb-8 xs:mb-12">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full border border-primary/20"
                >
                  <Star className="text-primary" size={24} />
                  <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                    Featured Projects
                  </h2>
                  <Star className="text-primary" size={24} />
                </motion.div>
              </div>
              
              <div className={`grid gap-6 xs:gap-8 ${
                viewMode === 'grid' 
                  ? 'md:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1 max-w-4xl mx-auto'
              }`}>
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    {viewMode === 'grid' ? (
                      <ProjectCard project={project} index={index} featured={true} />
                    ) : (
                      <div className="flex flex-col sm:flex-row gap-6 p-6 bg-white/60 dark:bg-gray-800/60 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-all duration-300 group">
                        <div className="sm:w-1/3 flex-shrink-0">
                          <div className="relative overflow-hidden rounded-xl aspect-video">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <Eye className="text-white" size={24} />
                            </div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-xl xs:text-2xl font-bold group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                            <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
                              Featured
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.slice(0, 6).map((tech) => (
                              <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs">
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="flex gap-3">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-black transition-all">
                              <Github size={16} />
                              <span>Code</span>
                            </a>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-primary text-black rounded-lg hover:bg-primary/90 transition-all">
                              <ExternalLink size={16} />
                              <span>Live Demo</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* All Projects */}
          {otherProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8 xs:mb-12">
                <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent mb-4">
                  All Projects
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Discover more of my work across different technologies and domains
                </p>
              </div>
              
              <div className={`grid gap-6 xs:gap-8 ${
                viewMode === 'grid' 
                  ? 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                  : 'grid-cols-1 max-w-4xl mx-auto'
              }`}>
                {otherProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.6 }}
                  >
                    {viewMode === 'grid' ? (
                      <ProjectCard project={project} index={index} />
                    ) : (
                      <div className="flex flex-col sm:flex-row gap-4 p-4 bg-white/40 dark:bg-gray-800/40 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-all duration-300 group">
                        <div className="sm:w-1/4 flex-shrink-0">
                          <div className="relative overflow-hidden rounded-lg aspect-video">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {project.technologies.slice(0, 4).map((tech) => (
                              <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 px-3 py-1 border border-primary text-primary rounded hover:bg-primary hover:text-black transition-all text-sm">
                              <Github size={14} />
                              <span>Code</span>
                            </a>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 px-3 py-1 bg-primary text-black rounded hover:bg-primary/90 transition-all text-sm">
                              <ExternalLink size={14} />
                              <span>Demo</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 xs:py-20"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-6xl xs:text-8xl mb-6"
              >
                🔍
              </motion.div>
              <h3 className="text-2xl xs:text-3xl font-bold mb-4 text-gray-600 dark:text-gray-400">
                No Projects Found
              </h3>
              <p className="text-gray-500 dark:text-gray-500 mb-8 max-w-md mx-auto">
                Try adjusting your search terms or explore different categories
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setFilter('all')
                  setSearchTerm('')
                }}
                className="px-8 py-3 bg-gradient-to-r from-primary to-purple-500 text-black rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Clear All Filters
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-12 xs:py-16 sm:py-20 px-3 xs:px-4 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Project Statistics
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A glimpse into my development journey and technical expertise
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6">
            {[
              { number: projectsData.length, label: 'Total Projects', icon: '🚀' },
              { number: featuredProjects.length, label: 'Featured Works', icon: '⭐' },
              { number: new Set(projectsData.flatMap(p => p.technologies)).size, label: 'Technologies', icon: '⚡' },
              { number: '100%', label: 'Passion Driven', icon: '❤️' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 xs:p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="text-3xl xs:text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-2xl xs:text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {typeof stat.number === 'number' ? (
                    <AnimatedCounter end={stat.number} />
                  ) : (
                    stat.number
                  )}
                </div>
                <div className="text-sm xs:text-base text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects