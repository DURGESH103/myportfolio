import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import Card from '../components/Card'
import SectionTitle from '../components/SectionTitle'
import { sendEmail } from '../utils/emailService'
// import LoadingSpinner from '../components/LoadingSpinner'
// import Toast from '../components/Toast'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)


  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'dkumar11dec2003@gmail.com', href: 'mailto:dkumar11dec2003@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 (XXX) XXX-XXXX', href: 'tel:+91XXXXXXXXXX' },
    { icon: MapPin, label: 'Location', value: 'India', href: '#' },
  ]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await sendEmail(formData)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } catch (error) {
      setSubmitStatus('error')
      
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {isSubmitting && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      )}
      <div className="pt-20 xs:pt-24 pb-12 xs:pb-16 px-3 xs:px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Let's discuss your next project or just say hello"
        />

        <div className="grid lg:grid-cols-2 gap-8 xs:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 xs:mb-8 text-sm xs:text-base">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={20} />
                  <span className="text-green-500">Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                  <span className="text-red-500">There was an error sending your message. Please try again.</span>
                </div>
              )}
              
              <div className="space-y-6">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center p-3 xs:p-4 rounded-lg border border-white/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  >
                    <Icon className="text-primary mr-3 xs:mr-4" size={20} />
                    <div>
                      <p className="font-semibold text-sm xs:text-base">{label}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-xs xs:text-sm">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <h3 className="text-2xl font-bold mb-6">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4 xs:space-y-6">
                <div className="grid gap-3 xs:gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 xs:px-4 py-2.5 xs:py-3 text-sm xs:text-base rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 xs:px-4 py-2.5 xs:py-3 text-sm xs:text-base rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 xs:px-4 py-2.5 xs:py-3 text-sm xs:text-base rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 xs:px-4 py-2.5 xs:py-3 text-sm xs:text-base rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-4 xs:px-6 py-2.5 xs:py-3 text-sm xs:text-base bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover-glow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="mr-2" size={20} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact