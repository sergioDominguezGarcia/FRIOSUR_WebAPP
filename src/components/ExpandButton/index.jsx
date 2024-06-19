import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

const ExpandableText = ({ fullText, initialText, mode }) => {
  const [expanded, setExpanded] = useState(false)
  const [maxHeight, setMaxHeight] = useState('100px') // Initial height limit
  const textRef = useRef(null)

  useEffect(() => {
    if (expanded) {
      setMaxHeight(`${textRef.current.scrollHeight}px`)
    } else {
      setMaxHeight('100%') // Collapsed height limit
    }
  }, [expanded])

  const toggleExpand = () => {
    setExpanded(!expanded)
  }

  return (
    <Container>
      <Text ref={textRef}>
        {fullText}
      </Text>

    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Text = styled.div`
  overflow: hidden;
  max-height: ${(props) => props.maxHeight};
  transition: max-height 0.5s ease-out;
  text-align: center;
  white-space: pre-wrap;
`

const ToggleExpandButton = styled.button`
  margin-top: 10px;
  background: none;
  border: none;
  font-weight: bold;
  text-decoration-line: underline;
  color: ${(props) => (props.mode === 'mode1' ? '#f0f0f0' : '#698669')};
  cursor: pointer;
  align-self: center;

  @media (max-width: 780px) {
    align-self: center;
  }
`

export default ExpandableText
