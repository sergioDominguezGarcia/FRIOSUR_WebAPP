import styled from 'styled-components'

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 5px solid greenyellow; */
 
  
  /* margin-top: 12rem; */
`
export const Container = styled.div`
  perspective: 1000px;
  height: 40%;
  display: flex;
  flex-direction: column;
  /* gap: 20px; */
  max-width: 600px;
  position: absolute;
  @media (max-width: 900px) {
    height: 60%;
  }
  /* border: 1px solid greenyellow; */
`
export const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s;

  &:hover {
    transform: rotateY(180deg);
  }

  @media (max-width: 900px) {

    height: 40%;
  
  }
`
export const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
`
export const Front = styled(Card)`
  position: absolute;
  /* margin-top: 30px; */
`
export const Back = styled(Card)`
  transform: rotateY(180deg);
`
export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`
