import styled from 'styled-components'

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  `
export const Container = styled.div`
/* border: 2px solid purple; */
  perspective: 1000px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* position: absolute; */
  max-width: 600px;
position: absolute;
`
export const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s;

  &:hover {
    transform: rotateY(180deg);
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
  margin-top: 30px;
`
export const Back = styled(Card)`
  transform: rotateY(180deg);
`
export const CardHeader = styled.div`

`
