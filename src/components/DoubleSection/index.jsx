import React from 'react'
import {Section, Column}  from "./styles"
import ExpandableText from '../ExpandButton'



export const DoubleSection = ({
  leftContent,
  rightContent,
  mode,
  leftInitialText,
  leftFullText,
  rightInitialText,
  rightFullText,
}) => {
  return (
    <Section mode={mode}>
      <Column mode={mode}>
        {React.isValidElement(leftContent) && leftContent.type === 'div' ? (
          <ExpandableText
            initialText={leftInitialText}
            fullText={leftFullText}
            mode={mode}
          />
        ) : (
          leftContent
        )}
      </Column>
      <Column mode={mode}>
        {React.isValidElement(rightContent) && rightContent.type === 'div' ? (
          <ExpandableText
            initialText={rightInitialText}
            fullText={rightFullText}
            mode={mode}
          />
        ) : (
          rightContent
        )}
      </Column>
    </Section>
  )
}

export default DoubleSection
