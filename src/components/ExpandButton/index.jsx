import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

const ExpandableText = ({ fullText, initialText }) => {
  const [expanded, setExpanded] = useState(false)
  const [maxHeight, setMaxHeight] = useState('100px') // Initial height limit
  const textRef = useRef(null)

  useEffect(() => {
    if (expanded) {
      setMaxHeight(`${textRef.current.scrollHeight}px`)
    } else {
      setMaxHeight('170px') // Collapsed height limit
    }
  }, [expanded])

  const toggleExpand = () => {
    setExpanded(!expanded)
  }

  return (
    <Container>
      <Text ref={textRef} maxHeight={maxHeight}>
        {expanded ? fullText : initialText}
      </Text>
      <ToggleExpandButton onClick={toggleExpand}>
        {expanded ? 'Ver menos' : 'Ver más'}
      </ToggleExpandButton>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Text = styled.div`
  overflow: hidden;
  max-height: ${(props) => props.maxHeight};
  transition: max-height 0.5s ease-out;
`

const ToggleExpandButton = styled.button`
  margin-top: 10px;
  background: none;
  border: none;
  color: #f0f0f0;
  cursor: pointer;
  align-self: flex-start;
`

export default ExpandableText
