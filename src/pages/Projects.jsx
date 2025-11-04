import { motion } from 'framer-motion'
import { Star, Filter, Search } from 'lucide-react'
import { useState } from 'react'
import LazyImage from '../components/LazyImage'
import AnimatedCounter from '../components/AnimatedCounter'
import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import { projectsData } from '../data/projectsData'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  
  const categories = ['all', 'frontend', 'fullstack', 'mobile']
  
  const filteredProjects = projectsData.filter(project => {
    const matchesFilter = filter === 'all' || project.category?.toLowerCase() === filter
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  const featuredProjects = filteredProjects.filter(project => project.featured)
  const otherProjects = filteredProjects.filter(project => !project.featured)

  return (
    <div className="pt-20 xs:pt-24 pb-12 xs:pb-16 px-3 xs:px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <SectionTitle 
            title="My Projects" 
            subtitle="A showcase of my creative solutions and technical expertise"
          />
          
          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col gap-3 xs:gap-4 justify-center items-center mb-8 xs:mb-12 max-w-2xl mx-auto">
          
            {/* Search Bar */}
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-8 xs:pl-10 pr-3 xs:pr-4 py-2.5 xs:py-3 text-sm xs:text-base rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-primary focus:outline-none transition-all duration-300 backdrop-blur-sm"
              />
            </div>
            
            {/* Filter Buttons */}
            <div className="flex gap-1.5 xs:gap-2 flex-wrap justify-center">
              <Filter className="text-gray-400 mt-3" size={20} />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-3 xs:px-4 py-1.5 xs:py-2 text-xs xs:text-sm rounded-xl font-medium transition-all duration-300 capitalize ${
                    filter === category
                      ? 'bg-primary text-black shadow-lg'
                      : 'bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-primary/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="flex items-center justify-center mb-12">
              <Star className="mr-3 text-primary" size={28} />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <Star className="ml-3 text-primary" size={28} />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <ProjectCard project={project} index={index} featured={true} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* All Projects Grid */}
        {otherProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              All Projects
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <ProjectCard project={project} index={index} />
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
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-600 dark:text-gray-400">No Projects Found</h3>
            <p className="text-gray-500 dark:text-gray-500 mb-6">
              Try adjusting your search terms or filters
            </p>
            <button
              onClick={() => {
                setFilter('all')
                setSearchTerm('')
              }}
              className="px-6 py-3 bg-primary text-black rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 xs:gap-6 max-w-4xl mx-auto">
            {[
              { number: projectsData.length, label: 'Total Projects' },
              { number: featuredProjects.length, label: 'Featured' },
              { number: new Set(projectsData.flatMap(p => p.technologies)).size, label: 'Technologies' },
              { number: '100%', label: 'Passion' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 xs:p-6 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm">
              
                <div className="text-xl xs:text-2xl md:text-3xl font-bold text-primary mb-2">
                  {typeof stat.number === 'number' ? (
                    <AnimatedCounter end={stat.number} />
                  ) : (
                    stat.number
                  )}
                </div>
                <div className="text-xs xs:text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects