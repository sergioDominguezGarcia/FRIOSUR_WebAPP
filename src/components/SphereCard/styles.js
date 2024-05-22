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
  /* position: absolute; */
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
  max-width: 35rem;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
  @media screen and (max-width: 1100px) {
    max-width: 70rem;
    height: 30%;
  }
`
export const Front = styled(Card)`
  /* position: relative; */
  align-content: center;
  flex-direction: column;
  gap: 2rem;
  `
export const Back = styled(Card)`
  transform: rotateY(180deg);
  /* border: 3px solid purple; */
  align-content: center;
  
`
export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
