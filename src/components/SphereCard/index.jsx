import { Body, CardHeader, Container, CardWrapper, Front, Back } from './styles'

export const SphereCard = ({ headerContent, frontContent, backContent }) => {
  return (
    <Body>
      <Container>
        <CardHeader>{headerContent}</CardHeader>
        <CardWrapper>
          <Front>{frontContent}</Front>
          <Back>{backContent}</Back>
        </CardWrapper>
      </Container>
    </Body>
  )
}
export default SphereCard
