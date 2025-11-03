import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Calendar, X, Download, Award, Search, Filter } from 'lucide-react'
import Card from '../components/Card'
import SectionTitle from '../components/SectionTitle'
import { certificationsData } from '../data/certificationsData'

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')

  const categories = ['all', ...new Set(certificationsData.map(cert => cert.issuer))]
  
  const filteredCerts = certificationsData.filter(cert => {
    const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.issuer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filter === 'all' || cert.issuer === filter
    return matchesSearch && matchesFilter
  })

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
            title="Certifications & Achievements" 
            subtitle="Professional certifications that validate my expertise and commitment to continuous learning"
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
                placeholder="Search certifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-8 xs:pl-10 pr-3 xs:pr-4 py-2.5 xs:py-3 text-sm xs:text-base rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-primary focus:outline-none transition-all duration-300 backdrop-blur-sm"
              />
            </div>
            
            {/* Filter Dropdown */}
            <div className="flex gap-1.5 xs:gap-2">
              <Filter className="text-gray-400 mt-3" size={20} />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="px-3 xs:px-4 py-2.5 xs:py-3 text-sm xs:text-base rounded-xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-primary focus:outline-none transition-all duration-300 backdrop-blur-sm"
              >
                {categories.map((category) => (
                  <option key={category} value={category} className="bg-white dark:bg-gray-800">
                    {category === 'all' ? 'All Issuers' : category}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>
        </motion.div>

        {/* Certifications Grid */}
        {filteredCerts.length > 0 ? (
          <div className="grid gap-4 xs:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCerts.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full text-center group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer">
                  <div onClick={() => setSelectedCert(cert)}>
                    {/* Certificate Logo */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative mb-6"
                    >
                      <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center overflow-hidden">
                        <img
                          src={cert.logo}
                          alt={cert.issuer}
                          className="w-16 h-16 object-contain"
                          onError={(e) => {
                            e.target.style.display = 'none'
                            e.target.nextSibling.style.display = 'flex'
                          }}
                        />
                        <div className="hidden w-16 h-16 bg-gradient-to-br from-primary to-purple-500 rounded-xl items-center justify-center">
                          <Award className="text-white" size={32} />
                        </div>
                      </div>
                      
                      {/* Floating Badge */}
                      <motion.div
                        animate={{ rotate: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
                      >
                        <span className="text-white text-xs font-bold">✓</span>
                      </motion.div>
                    </motion.div>

                    {/* Certificate Info */}
                    <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-primary font-semibold mb-3">{cert.issuer}</p>
                    
                    <div className="flex items-center justify-center mb-4 text-gray-600 dark:text-gray-400">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">{cert.date}</span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3">
                      {cert.description}
                    </p>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-auto">
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="flex-1 px-4 py-2 border border-primary text-primary rounded-xl hover:bg-primary hover:text-black transition-all duration-300 text-sm font-medium"
                    >
                      View Details
                    </button>
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-4 py-2 bg-primary text-black rounded-xl hover:bg-primary/90 transition-all duration-300"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          /* No Results */
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-600 dark:text-gray-400">No Certifications Found</h3>
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
          className="mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 xs:gap-6 max-w-4xl mx-auto">
            {[
              { number: certificationsData.length, label: 'Total Certifications' },
              { number: new Set(certificationsData.map(c => c.issuer)).size, label: 'Issuers' },
              { number: new Date().getFullYear() - Math.min(...certificationsData.map(c => parseInt(c.date))), label: 'Years Learning' },
              { number: '100%', label: 'Verified' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 xs:p-6 rounded-2xl bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm text-center">
              
                <div className="text-xl xs:text-2xl md:text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-xs xs:text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-lg"
              >
                <Card className="relative">
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="absolute top-4 right-4 p-2 hover:bg-primary/10 rounded-xl transition-colors z-10"
                  >
                    <X size={20} />
                  </button>
                  
                  <div className="text-center mb-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center overflow-hidden">
                      <img
                        src={selectedCert.logo}
                        alt={selectedCert.issuer}
                        className="w-24 h-24 object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          e.target.nextSibling.style.display = 'flex'
                        }}
                      />
                      <div className="hidden w-24 h-24 bg-gradient-to-br from-primary to-purple-500 rounded-2xl items-center justify-center">
                        <Award className="text-white" size={48} />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">{selectedCert.title}</h3>
                    <p className="text-primary font-bold text-lg mb-3">{selectedCert.issuer}</p>
                    
                    <div className="flex items-center justify-center mb-6 text-gray-600 dark:text-gray-400">
                      <Calendar size={20} className="mr-2" />
                      <span className="text-lg">{selectedCert.date}</span>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-bold mb-3">About This Certification</h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{selectedCert.description}</p>
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={selectedCert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-xl hover:bg-primary hover:text-black transition-all duration-300 font-medium"
                    >
                      <ExternalLink className="mr-2" size={20} />
                      View Credential
                    </a>
                    <button className="flex-1 flex items-center justify-center px-6 py-3 bg-primary text-black rounded-xl hover:bg-primary/90 transition-all duration-300 font-medium">
                      <Download className="mr-2" size={20} />
                      Download
                    </button>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Certifications