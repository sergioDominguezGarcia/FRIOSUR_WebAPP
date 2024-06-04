import React from 'react'
import {Section, Column}  from "./styles"

export const DoubleSection = ({ leftContent, rightContent, mode }) => {
  
  return (
    <Section mode={mode}>
      <Column className="column left-column" mode={mode}>
        {leftContent}
      </Column>
      <Column className="column right-column" mode={mode}>
        {rightContent}
      </Column>
    </Section>
  )
}

export default DoubleSection
