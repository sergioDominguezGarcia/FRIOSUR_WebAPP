import styled from 'styled-components'

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 200px;
  max-width: 2000px;
  perspective: 1000px;
  position: absolute;
  align-items: center;

  /* border: 3px dotted red; */
`
export const CardWrapper = styled.div`
  width: 100%;
  height: 10rem;
  align-items: center;
  transform-style: preserve-3d;
  transition: transform 0.6s;

  &:hover {
    transform: rotateY(180deg);
  }
  /* border: 3px solid greenyellow; */
`
export const Card = styled.div`
  width: 40rem;
  height: 70%;
  display: flex;
  align-items: center;

  justify-content: center;
  backface-visibility: hidden;
`
export const Front = styled(Card)`
  position: absolute;
  align-content: center;
  /* border: 3px solid purple; */
`
export const Back = styled(Card)`
  transform: rotateY(180deg);
  align-content: center;
`
export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
