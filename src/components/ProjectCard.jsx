import { motion } from 'framer-motion'
import { Github, ExternalLink, Eye } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import OptimizedImage from './OptimizedImage'

const ProjectCard = ({ project, index }) => {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
        <div className="group relative p-6 rounded-xl backdrop-blur-md border dark:bg-white/5 dark:border-white/10 bg-black/5 border-black/10 transition-all duration-300 hover:border-primary/30 hover-glow cursor-pointer h-full hover:scale-105 hover:-rotate-1">
          <div onClick={() => navigate(`/project/${project.id}`)}>
            <div className="relative overflow-hidden rounded-lg mb-4">
              <OptimizedImage
                src={project.image}
                alt={project.title}
                className="w-full h-48 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Eye className="text-white" size={32} />
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="opacity-80 mb-4 text-sm line-clamp-3">
              {project.description}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-primary/20 text-primary rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-3 mt-auto">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center px-3 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-black transition-all duration-300 text-sm"
            >
              <Github className="mr-1" size={14} />
              Code
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center px-3 py-2 bg-primary text-black rounded-lg hover:bg-primary/90 transition-all duration-300 text-sm"
            >
              <ExternalLink className="mr-1" size={14} />
              Live
            </a>
          </div>
        </div>
    </motion.div>
  )
}

export default ProjectCard