import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { Code, Heart, Coffee, Zap, Target, Users, Award, BookOpen, MapPin, Calendar, Mail, Phone } from 'lucide-react'
import Card from '../components/Card'
import SectionTitle from '../components/SectionTitle'
import OptimizedImage from '../components/OptimizedImage'
import { skillsData } from '../data/skillsData'

const About = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const [activeTab, setActiveTab] = useState('story')

  const personalInfo = {
    name: "Durgesh Kumar",
    title: "Full Stack Developer",
    location: "India",
    email: "dkumar11dec2003@gmail.com",
    phone: "+91 9199832950",
    experience: "2+ Years",
    projects: "12+",
    languages: ["English", "Hindi"]
  }

  const journey = [
  {
    year: "2025",
    title: "B.Tech (3rd Year)",
    company: "KL University, Vijayawada, Andhra Pradesh",
    description:
      "Currently pursuing Bachelor of Technology with a focus on Full Stack Development, Artificial Intelligence, and Modern Web Technologies.",
    icon: Code,
    color: "from-blue-500 to-purple-600"
  },
  {
    year: "2024",
    title: "B.Tech (2nd Year)",
    company: "KL University, Vijayawada, Andhra Pradesh",
    description:
      "Explored advanced programming concepts, data structures, algorithms, and built multiple academic and personal projects using Django and React.",
    icon: Zap,
    color: "from-green-500 to-blue-500"
  },
  {
    year: "2023",
    title: "B.Tech (1st Year)",
    company: "KL University, Vijayawada, Andhra Pradesh",
    description:
      "Started my engineering journey by learning the fundamentals of computer science, programming, and software development.",
    icon: Heart,
    color: "from-pink-500 to-red-500"
  }
];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every line of code serves a purpose. I believe in writing clean, efficient, and maintainable code.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Great products are built by great teams. I thrive in collaborative environments and value diverse perspectives.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BookOpen,
      title: "Learning",
      description: "Technology evolves rapidly. I'm committed to continuous learning and staying updated with industry trends.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "I love exploring new technologies and finding creative solutions to complex problems.",
      color: "from-yellow-500 to-orange-500"
    }
  ]

  const hobbies = [
    { name: "Coding", icon: "💻", description: "Building side projects and contributing to open source" },
    { name: "Reading", icon: "📚", description: "Tech blogs, documentation, and sci-fi novels" },
    { name: "Gaming", icon: "🎮", description: "Strategy games and puzzle solving" },
    { name: "Photography", icon: "📸", description: "Capturing moments and exploring composition" },
    { name: "Music", icon: "🎵", description: "Listening to various genres while coding" },
    { name: "Travel", icon: "✈️", description: "Exploring new places and cultures" }
  ]

  const tabs = [
    { id: 'story', label: 'My Story', icon: Heart },
    { id: 'journey', label: 'Journey', icon: MapPin },
    { id: 'values', label: 'Values', icon: Target },
    { id: 'personal', label: 'Personal', icon: Coffee }
  ]

  return (
    <div ref={ref} className="relative pt-24 pb-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="relative inline-block mb-8">
            <motion.div
              style={{ y }}
              className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-3xl rounded-full"
            />
            <img
              src="/api/placeholder/300/300"
              alt="Deepak Kumar"
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary/30 shadow-2xl mx-auto"
            />
          </div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            About <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">Me</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed"
          >
            Passionate developer crafting digital experiences that make a difference. 
            Here's my story, journey, and what drives me every day.
          </motion.p>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                activeTab === id
                  ? 'bg-gradient-to-r from-primary to-emerald-400 text-black shadow-lg shadow-primary/25'
                  : 'border border-white/20 text-gray-400 hover:border-primary/50 hover:text-primary'
              }`}
            >
              <Icon size={20} className="mr-2" />
              {label}
            </button>
          ))}
        </motion.div>

        {/* Content Sections */}
        <div className="min-h-[600px]">
          {/* My Story Tab */}
          {activeTab === 'story' && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <Card className="p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                    Hello! I'm Durgesh
                  </h2>
                  <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
  <p className="text-lg">
    I'm a passionate <span className="font-semibold text-blue-500">Full Stack Developer</span> 
    and a <span className="font-semibold">B.Tech 3rd-year student</span> at 
    <span className="font-semibold"> KL University, Vijayawada, Andhra Pradesh</span>. 
    My journey in technology began with curiosity and has grown into a strong passion 
    for building impactful digital experiences.
  </p>

  <p>
    Over the past few years, I've gained hands-on experience developing 
    <span className="font-semibold"> web applications</span>, 
    <span className="font-semibold"> e-commerce platforms</span>, and 
    <span className="font-semibold"> AI-powered tools</span> using 
    modern technologies like <span className="font-semibold">React, Django, Node.js,</span> 
    and <span className="font-semibold">MongoDB</span>. I believe in writing 
    <span className="font-semibold"> clean, maintainable code</span> and 
    crafting <span className="font-semibold">intuitive, responsive user interfaces</span>.
  </p>

  <p>
    Beyond coding, I love exploring emerging technologies, working on innovative projects, 
    and contributing to the developer community. I’m continuously learning, growing, 
    and preparing to build a meaningful career in software development — one line of code at a time.
  </p>
</div>
                </Card>
              </div>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Award className="mr-2 text-primary" size={24} />
                    Quick Facts
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Location</span>
                      <span className="font-semibold text-gray-800 dark:text-white">{personalInfo.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Experience</span>
                      <span className="font-semibold text-primary">{personalInfo.experience}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Projects</span>
                      <span className="font-semibold text-gray-800 dark:text-white">{personalInfo.projects}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Languages</span>
                      <span className="font-semibold text-gray-800 dark:text-white">{personalInfo.languages.join(', ')}</span>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Mail className="mr-2 text-primary" size={24} />
                    Contact Info
                  </h3>
                  <div className="space-y-3">
                    <a href={`mailto:${personalInfo.email}`} className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                      <Mail size={16} className="mr-3" />
                      {personalInfo.email}
                    </a>
                    <div className="flex items-center text-gray-700 dark:text-gray-300">
                      <Phone size={16} className="mr-3" />
                      {personalInfo.phone}
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>
          )}

          {/* Journey Tab */}
          {activeTab === 'journey' && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  My Professional Journey
                </h2>
                
                <div className="space-y-8">
                  {journey.map((item, index) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
                    >
                      <div className="flex-1">
                        <Card className="p-6 md:p-8 group hover:shadow-2xl transition-all duration-500">
                          <div className="flex items-center mb-4">
                            <div className={`p-3 rounded-2xl bg-gradient-to-r ${item.color} mr-4`}>
                              <item.icon className="text-white" size={24} />
                            </div>
                            <div>
                              <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">
                                {item.title}
                              </h3>
                              <p className="text-primary font-semibold">{item.company}</p>
                            </div>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.description}</p>
                        </Card>
                      </div>
                      
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                          {item.year}
                        </div>
                      </div>
                      
                      <div className="flex-1 hidden md:block">
                        {index % 2 === 0 && <div className="w-full"></div>}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Values Tab */}
          {activeTab === 'values' && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                What Drives Me
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card className="p-8 h-full group hover:shadow-2xl transition-all duration-500">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${value.color} mb-6`}>
                        <value.icon className="text-white" size={32} />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{value.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Personal Tab */}
          {activeTab === 'personal' && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                Beyond The Code
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={hobby.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <Card className="p-6 text-center group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {hobby.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {hobby.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{hobby.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <SectionTitle title="Technical Skills" subtitle="Technologies I work with daily" />
          
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2 }}
              >
                <Card className="p-6 md:p-8 h-full group hover:shadow-2xl transition-all duration-500">
                  <h3 className="text-2xl font-bold mb-6 capitalize bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                    {category}
                  </h3>
                  <div className="space-y-4">
                    {skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-primary font-bold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                            className="bg-gradient-to-r from-primary to-emerald-400 h-full rounded-full relative"
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About