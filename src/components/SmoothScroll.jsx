import { useEffect } from 'react'

const SmoothScroll = () => {
  useEffect(() => {
    // Add smooth scrolling behavior
    const style = document.createElement('style')
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
      
      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.1);
      }
      
      ::-webkit-scrollbar-thumb {
        background: linear-gradient(45deg, #00FF99, #00CC7A);
        border-radius: 4px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(45deg, #00CC7A, #00FF99);
      }
      
      /* Smooth transitions for interactive elements */
      button, a, input, textarea, select {
        transition: all 0.3s ease;
      }
      
      /* Reduce motion for users who prefer it */
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
      
      /* Focus styles for accessibility */
      button:focus,
      input:focus,
      textarea:focus,
      select:focus {
        outline: 2px solid #00FF99;
        outline-offset: 2px;
      }
    `
    document.head.appendChild(style)
    
    return () => {
      document.head.removeChild(style)
    }
  }, [])
  
  return null
}

export default SmoothScroll