import styled, { keyframes } from 'styled-components'
import L21 from './logos/L21.png'


export const Body = styled.div`
  height: 100vh;
  width: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`

export const Container = styled.div`
  perspective: 250px;
  width: 300px;
  height: 150px;
  position: relative;
`

const Carrusel = keyframes`
    from {
      transform: rotateY(360deg) translateZ(100px);
      z-index: 10;
      opacity: 0.9;
    }
    50% {
      z-index: -10;
    }
    to {
      transform: rotateX(0deg) translateZ(100px);
    }
  `
export const Card = styled.div`
  width: 100%;
  height: 100%;

  font-size: 40px;
  position: absolute;
  top: 35px;
  left: 125px;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  animation: ${Carrusel} 20s linear infinite;
`

// export const L1 = styled.div`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `
// export const L2 = styled.div`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `
// export const L3 = styled.div`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `
// export const L4 = styled.div`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `
// export const L5 = styled.div`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `
// export const L6 = styled.div`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `
// export const L7 = styled.div`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `
// export const L8 = styled.div`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `
// export const L9 = styled.div`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `
// export const L10 = styled.div`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `
// export const L11 = styled.div`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `
// export const L12 = styled.div`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `
// export const L13 = styled.div`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   animation-delay: -8s;
// `
// export const L14 = styled.div`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   animation-delay: -7s;
// `
// export const L15 = styled.div`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   animation-delay: -6s;
// `
// export const L16 = styled.div`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   animation-delay: -5s;
// `
export const Lo21 = styled.div`
  width: 100%;
  background-color: black;
  background-image: url('./logos/L21.png');
  background-size: cover;
`
export const L20 = styled.div`
  width: 100%;
  
  background-color: white;
  background-image: url('./logos/L20.jpg');
  background-size: cover;
  animation-delay: -2s;
`
  export const L19 = styled.div`
    width: 100%;
    background-color: white;
    background-image: url('./logos/L19.JPG');
    background-size: cover;
    animation-delay: -4s;
  `
  export const L18 = styled.div`
    width: 100%;
    background-color: white;
    background-image: url('./logos/L18.jpg');
    background-size: cover;
    animation-delay: -6s;
  `
  export const L17 = styled.div`
    width: 100%;
    background-color: black;
    background-image: url('./logos/L17.png');
    background-size: cover;
    animation-delay: -8s;
  `