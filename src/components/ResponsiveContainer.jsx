import { useEffect } from 'react'

const ResponsiveContainer = ({ children, className = "" }) => {
  useEffect(() => {
    // Ensure proper viewport scaling on mount
    const viewport = document.querySelector('meta[name="viewport"]')
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no')
    }

    // Add overflow-x hidden to body to prevent horizontal scroll
    document.body.style.overflowX = 'hidden'
    
    // Cleanup
    return () => {
      document.body.style.overflowX = 'auto'
    }
  }, [])

  return (
    <div className={`w-full max-w-full overflow-x-hidden ${className}`}>
      {children}
    </div>
  )
}

export default ResponsiveContainer