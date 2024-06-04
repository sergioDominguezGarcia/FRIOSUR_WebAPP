import styled from 'styled-components'

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 5px solid greenyellow; */
  /* box-sizing: border-box; */

  /* margin-top: 12rem; */
`
export const Container = styled.div`
  perspective: 1000px;
  background-color: #F9F9F9;
  height: 40%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-width: 350px;
  position: absolute;
  border-radius: 15px;
  padding: 1rem;
  position: relative;
  @media (max-width: 900px) {
    height: 40%;
  }
`
export const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  box-sizing: border-box;
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
  box-sizing: border-box;
`
export const Front = styled(Card)`
  position: absolute;
  /* margin-top: 30px; */
  box-sizing: border-box;
`
export const Back = styled(Card)`
  transform: rotateY(180deg);
  /* position: absolute; */
  box-sizing: border-box;

`
export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`
