import { Component } from 'react'
import { motion } from 'framer-motion'
import { RefreshCw, Home } from 'lucide-react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white p-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-md"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 mx-auto mb-6 border-4 border-primary/30 border-t-primary rounded-full"
            />
            <h1 className="text-2xl font-bold mb-4">Oops! Something went wrong</h1>
            <p className="text-gray-400 mb-8">
              We encountered an unexpected error. Please try refreshing the page.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="flex items-center px-6 py-3 bg-primary text-black rounded-xl font-semibold hover:bg-primary/90 transition-colors"
              >
                <RefreshCw className="mr-2" size={20} />
                Refresh Page
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="flex items-center px-6 py-3 border border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-black transition-colors"
              >
                <Home className="mr-2" size={20} />
                Go Home
              </button>
            </div>
          </motion.div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary