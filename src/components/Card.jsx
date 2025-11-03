import { motion } from 'framer-motion'

const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
      className={`
        p-6 rounded-xl backdrop-blur-md border
        dark:bg-white/5 dark:border-white/10 dark:hover:border-primary/30
        bg-white/80 border-gray-200 hover:border-primary/30 shadow-lg dark:shadow-none
        transition-all duration-300 hover-glow
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card