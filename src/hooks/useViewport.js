import { useState, useEffect } from 'react'

const useViewport = () => {
  const [viewport, setViewport] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isLandscape: false,
    isPortrait: false,
    devicePixelRatio: typeof window !== 'undefined' ? window.devicePixelRatio : 1,
    isTouchDevice: false,
    isIOS: false,
    isAndroid: false,
    viewportHeight: typeof window !== 'undefined' ? window.innerHeight : 0,
    safeAreaTop: 0,
    safeAreaBottom: 0
  })

  useEffect(() => {
    const updateViewport = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      const isMobile = width < 768
      const isTablet = width >= 768 && width < 1024
      const isDesktop = width >= 1024
      const isLandscape = width > height
      const isPortrait = height > width
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      
      // Detect iOS and Android
      const userAgent = navigator.userAgent || navigator.vendor || window.opera
      const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream
      const isAndroid = /android/i.test(userAgent)
      
      // Get actual viewport height (important for mobile browsers)
      const viewportHeight = window.visualViewport ? window.visualViewport.height : height
      
      // Get safe area insets for devices with notches
      const computedStyle = getComputedStyle(document.documentElement)
      const safeAreaTop = parseInt(computedStyle.getPropertyValue('env(safe-area-inset-top)')) || 0
      const safeAreaBottom = parseInt(computedStyle.getPropertyValue('env(safe-area-inset-bottom)')) || 0

      setViewport({
        width,
        height,
        isMobile,
        isTablet,
        isDesktop,
        isLandscape,
        isPortrait,
        devicePixelRatio: window.devicePixelRatio || 1,
        isTouchDevice,
        isIOS,
        isAndroid,
        viewportHeight,
        safeAreaTop,
        safeAreaBottom
      })
    }

    // Initial update
    updateViewport()

    // Listen for resize events
    window.addEventListener('resize', updateViewport)
    window.addEventListener('orientationchange', updateViewport)
    
    // Listen for visual viewport changes (mobile keyboard, etc.)
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', updateViewport)
    }

    return () => {
      window.removeEventListener('resize', updateViewport)
      window.removeEventListener('orientationchange', updateViewport)
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', updateViewport)
      }
    }
  }, [])

  return viewport
}

export default useViewport