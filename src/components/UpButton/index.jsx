import React, { useState, useEffect } from 'react'
import {Button} from './styles'
import { FaArrowUp } from 'react-icons/fa'
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <Button onClick={scrollToTop} isVisible={isVisible}>
      <FaArrowUp />
    </Button>
  )
}

export default ScrollToTopButton
