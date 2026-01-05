import { useState, useEffect } from 'react'

const MobileTouchHandler = ({ children, className = '', onTap, disabled = false }) => {
  const [isPressed, setIsPressed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detect if device supports touch
    const checkMobile = () => {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0
    }
    
    setIsMobile(checkMobile())
  }, [])

  const handleTouchStart = (e) => {
    if (disabled) return
    setIsPressed(true)
    // Prevent default to avoid double-tap zoom on iOS
    if (onTap) {
      e.preventDefault()
    }
  }

  const handleTouchEnd = (e) => {
    if (disabled) return
    setIsPressed(false)
    if (onTap) {
      e.preventDefault()
      onTap(e)
    }
  }

  const handleTouchCancel = () => {
    setIsPressed(false)
  }

  // For non-mobile devices, use regular click
  const handleClick = (e) => {
    if (!isMobile && onTap && !disabled) {
      onTap(e)
    }
  }

  const touchProps = isMobile ? {
    onTouchStart: handleTouchStart,
    onTouchEnd: handleTouchEnd,
    onTouchCancel: handleTouchCancel,
  } : {
    onClick: handleClick
  }

  return (
    <div
      className={`
        ${className}
        ${isPressed ? 'scale-95 opacity-80' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        transition-all duration-150 ease-out
        select-none
        ${isMobile ? 'touch-manipulation' : ''}
      `}
      {...touchProps}
      style={{
        WebkitTapHighlightColor: 'transparent',
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        userSelect: 'none',
        ...(!isMobile && { 
          WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' 
        })
      }}
    >
      {children}
    </div>
  )
}

export default MobileTouchHandler