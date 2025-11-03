import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Github, ExternalLink, Calendar, User, Code } from 'lucide-react'
import { projectsData } from '../data/projectsData'
import Card from '../components/Card'

const ProjectDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projectsData.find(p => p.id === parseInt(id))

  if (!project) {
    return (
      <div className="pt-24 pb-16 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <button
          onClick={() => navigate('/projects')}
          className="inline-flex items-center px-6 py-3 bg-primary text-black rounded-lg hover:bg-primary/90 transition-all duration-300"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Projects
        </button>
      </div>
    )
  }

  const keyFeatures = [
    "Responsive design for all devices",
    "Modern UI/UX with smooth animations",
    "Optimized performance and SEO",
    "Clean, maintainable code structure",
    "Cross-browser compatibility"
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16 px-4"
    >
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          onClick={() => navigate('/projects')}
          className="inline-flex items-center mb-8 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-black transition-all duration-300"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Projects
        </motion.button>

        {/* Project Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {project.title}
          </h1>
          <p className="text-xl opacity-80 mb-6">{project.description}</p>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-black transition-all duration-300"
            >
              <Github className="mr-2" size={20} />
              View Code
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary text-black rounded-lg hover:bg-primary/90 transition-all duration-300"
            >
              <ExternalLink className="mr-2" size={20} />
              Live Demo
            </a>
          </div>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-2xl"
          />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Code className="mr-2 text-primary" size={24} />
                  About This Project
                </h2>
                <p className="opacity-80 leading-relaxed mb-6">
                  This project showcases modern web development practices and cutting-edge technologies. 
                  Built with a focus on performance, accessibility, and user experience, it demonstrates 
                  my ability to create scalable and maintainable applications.
                </p>
                <p className="opacity-80 leading-relaxed">
                  The development process involved careful planning, iterative design, and thorough testing 
                  to ensure the final product meets high standards of quality and functionality.
                </p>
              </Card>

              <Card>
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {keyFeatures.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center opacity-80"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <h3 className="text-xl font-bold mb-4">Project Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="text-primary mr-3" size={20} />
                    <div>
                      <p className="font-semibold">Completed</p>
                      <p className="opacity-80 text-sm">2024</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <User className="text-primary mr-3" size={20} />
                    <div>
                      <p className="font-semibold">Role</p>
                      <p className="opacity-80 text-sm">Full Stack Developer</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Card>
                <h3 className="text-xl font-bold mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectDetails